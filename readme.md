# Learn React-native from scratch 



## flex box
trong RN mặc định Flex direction là column ( web là row - xếp các con theo hàng ngang);

1 justifyContent- theo hướng flex
2 alignItem
Giá trị 2 thằng này  : <br>
* flex-start <=> flex-end
* space-between
* space-around
* center 
//child node nằm trong flexbox
để flex :1 mặc định sẽ chiếm hết phần diện tích flexbox <br/>

### thẻ images
mặc định thẻ này nhận vào ```javascript source ={ {uri:link anh}} ``` <br/>
minh phai style cho no
tríck để ảnh cover full màn : Để ảnh vào Flex-box và sét thuộc tính cho thẻ img là flex 1

### Scollview
Để list có thể hiển thị hết và lúc scroll nó smoth thì nên để thuộc tính flex :1 ở root app
