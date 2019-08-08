export default interface ContainerInterface {
  map: any;
  createBean<T> (className: any, t: T) : any;
  updateBean<T> (className: any, t: T) : any;
  destroyBean (className: any) : boolean;
  getBean<T> (t: T) : any;
}
