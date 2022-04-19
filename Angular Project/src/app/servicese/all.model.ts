export class Products {

    productId: number = 0;
    productName: string = '';
    availableQuentity: number = 0;
    price: number = 0;
    productDescription: string = '';
    categoryId: number = 0;

}

export class Orders {
    orderId: number = 0;
    customerId: number = 0;
    paymentId: number = 0;
    totalPrice: number = 0;
    deleted: number = 0;

}


export class Ordersdetails {
    orderId: number = 0;
    productId: number = 0;
    price: number = 0;
    quantity: number = 0;

}

export class Payment {
    paymentId: number = 0;
    paymentType: string = "";
    isDone: string = "";

}


export class User {

    customerId: number = 0;
    customerName: string = "";
    address: string = "";
    state: string = "";
    pinCode: string = "";
    phoneNo: string = "";
    passWord: string = "";

}






