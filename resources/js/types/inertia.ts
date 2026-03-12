declare module "@inertiajs/core" {
  export interface InertiaConfig {
    sharedPageProps: {
      appName: string;
    };
    errorValueType: string[];
  }
}
