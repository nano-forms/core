export function createAbortablePromise<T>(
  fn: () => Promise<T>,
  abortController: AbortController
): Promise<T> {
  return new Promise(async (resolve: (result: T) => void, reject) => {
    abortController.signal.addEventListener('abort', () => {
      reject(new Error('AbortError'));
    });

    if (abortController.signal.aborted) {
      return;
    }

    try {
      const result = await fn();
      if (abortController.signal.aborted) {
        return;
      }

      resolve(result);
    } catch (error) {
      if (abortController.signal.aborted) {
        return;
      }

      reject(error);
    }
  });
}

export function createDelayedPromise<T>(
  fn: () => Promise<T>,
  milliseconds: number,
  abortController: AbortController | null = null
): Promise<T> {
  return new Promise((resolve: (value: T) => void, reject) => {
    let timeout: any | null = null;

    if (abortController) {
      abortController.signal.addEventListener('abort', () => {
        if (timeout) {
          clearTimeout(timeout);
        }

        reject(new Error('abort'));
      });
    }

    timeout = setTimeout(() => {
      (abortController
        ? createAbortablePromise(() => fn(), abortController)
        : fn()
      )
        .then(resolve)
        .catch(reject);
    }, milliseconds);
  });
}

// const createFindAddressesFn = () => {
//   let abortController: AbortController | null = null;

//   return async (address: string) => {
//     if (abortController) {
//       abortController.abort();
//     }

//     abortController = new AbortController();

//     return await createDelayedPromise(
//       () => findAddresses(address),
//       1000,
//       abortController
//     );
//   };
// };
