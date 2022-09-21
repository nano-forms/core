export class ObjectHelper {
  public static clone(obj: any): any {
    if (obj === null) {
      return null;
    }

    if (typeof obj === 'object') {
      if (obj instanceof Array) {
        return obj.map((x) => ObjectHelper.clone(x));
      }

      return Object.keys(obj).reduce((result, key: string) => {
        result[key] = ObjectHelper.clone(obj[key]);

        return result;
      }, {} as { [key: string]: any });
    }

    return obj;
  }
}
