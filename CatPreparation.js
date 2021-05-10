class Mkulima{
    constructor() {
        this.farms=[];
        this.products=[];
        this.orders=[];
    }
  }
Mkulima.prototype.addFarm=function(farmId, farmName, farmer, phoneNumber, address){
    let farms = {
            farmId:farmId,
            farmName:farmName,
             farmer:farmer, 
             phoneNumber:phoneNumber, 
             address:address
        };
    this.farms.push(farms)    
      return this.farms
    
    }
    
 Mkulima.prototype.removeFarm=function(farmId){
     
    let remfarm=this.farms.find(remfarm=>remfarm.farmId==farmId)
    
    return delete this.farms[remfarm]
    
     }
    
 Mkulima.prototype.updateFarm=function(farmId, farmName, farmer, phoneNumber, address){
        let FarmTobeUp=this.farms.find(remfarm=>remfarm.farmId==farmId);
          FarmTobeUp={
            farmId:farmId,
            farmName:farmName,
             farmer:farmer, 
             phoneNumber:phoneNumber, 
             address:address
        }
          
          return FarmTobeUp;
    
      }
    
Mkulima.prototype.getFarm=function(farmId) {
      let farmTobeFOund=this.farms.find(farmTobeFOund=> farmTobeFOund.farmId=='C208');
  
      return farmTobeFOund
      }

    
Mkulima.prototype.addProduct=function(productId, productName, price_field){
       let  products =  {
              productId:productId,
               productName:productName,
               price_field:price_field
          };
      this.products.push(products)
            
            return this.products;
    
      }
    
Mkulima.prototype.removeProduct=function(productId){

      let myProduct=this.products.find(myProduct=>myProduct.productId==productId)
        return delete this.products[myProduct];
    
      }
 Mkulima.prototype.updateProduct=function(productId, productName, price_field){
      let productToBeUpd=this.products.find(productToBeUpd=>productToBeUpd.productId=="P390")
      productToBeUpd={
           productId:productId,        
            productName:productName,
            price_field:price_field
        
      }
      return productToBeUpd
    }
    
Mkulima.prototype.getProduct=function(productId){

        let productToBFound=this.products.find(productToBFound=>productToBFound.productId==productId)
     return productToBFound;
      }

   Mkulima.prototype.printProducts=function(){
        for(let items of this.products){
          console.log([items.productName + " :" + items.price_field])
        }
         
        }
     Mkulima.prototype.calculateOrderCost=function(productId,quantity){
          let myPro=this.products.find(myPro=>myPro.productId==productId)
          return myPro.price_field*quantity
      
        }
  
      
class Farmer extends Mkulima{
    constructor(farmId,farmName,farmer,phoneNumber){
    super(farmId,farmName,farmer,phoneNumber);
    }
    register(farmer){
      this.farmer=farmer;
        console.log(this.farmer + " is now registered")
    }
      login(farmer){
        this.farmer=farmer;
        console.log(this.farmer+ "; " + "welcome to Mkulima Agro-start up online marketplace!")
    
      }
        upload(productName,price_field){
          this.productName=productName;
          this.price_field=price_field;
     console.log(this.productName + " ," + this.price_field + " $" + "" + " have been arleady uploaded")
       
      }
}
class Vendor extends Mkulima {
  constructor(VendorId,storeName,phoneNum){
    super(phoneNum);
  this.VendorId=VendorId;
  this.storeName=storeName;
  this.phoneNum=phoneNum;
  }
  signUp(){
    console.log(" Already signed up" + " ; " + "Welcome to Mkulima Online Marketplace")
}
  login(){
     console.log(" Logged In" + " :" + "Our bulk request are all placed" )

}
}
class Product extends Mkulima{
    constructor(productId,productName,price_field){
      super(productId,productName,price_field)
        this.productId=productId;
        this.productName=productName;
        this.price_field=price_field;

    }
  }
     
 

let mklm=new Mkulima()


let farmer1=new Farmer("C289","Marie's Farm","Chantal","2681036478496")
let vendor1=new Vendor("V3890","MMStrore","+27863247947056")

console.log(mklm.addFarm("C200","Chanto Farm","Chantal", "+25078888888","Rwanda"))
console.log(mklm.addFarm("C287","Emma Farm","Emma", "+2507888874979","USA"))
console.log(mklm.addFarm("C208","Maina Farm","Maina", "+25078346488","Rwanda"))
console.log(mklm.addFarm("C267","Purity Farm","Purity", "+2507888314","Kenya"))

console.log(mklm.removeFarm("C200"));
console.log(mklm.updateFarm("C4000","Niyonkuru's Farm","Niyonkuru","+257891800","Kenya"))
console.log(mklm.getFarm("C208"))
console.log(mklm.addProduct("P390","Banana",500))
 console.log(mklm.addProduct("P400","Maize",600))
console.log(mklm.addProduct("P500","Cabagges",700))
 console.log(mklm.addProduct("P800","Vegetables",800))


console.log(mklm.removeProduct("P500"));
console.log(mklm.updateProduct("P276374","JJProduct",6000))
console.log(mklm.getProduct("P800"))
mklm.printProducts()
console.log(mklm.calculateOrderCost("P390",2000))
console.log(mklm.calculateOrderCost("P400",2000))

farmer1.register("Chantal Niyonkuru");
farmer1.login("Chantal Niyonkuru");
farmer1.upload("Water Mellon",3000)
vendor1.signUp()
vendor1.login()


