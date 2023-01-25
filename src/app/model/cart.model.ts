export class Cart{
  _id!:string;
  user!: string;
  cartItems!:[{
    product:[],
    productQuantity:number
  }];

}
