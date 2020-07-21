var student1 = { id: 121, phone: 12345, name: "Misk" };
var student2 = { id: 234, phone: 67890, name: "Tisk" };

var phoneNo = student1["phone"];
console.log(phoneNo);
console.log(student2);

//update items
phonePropName = "phone"
student2.phone = 546332;
student2["phone"] = 273833;
student2[phonePropName] = 9999111;
console.log(student2);

//add new items
student2.cinema = "good boy";
console.log(student2);

var rahim = {
    fullName: 'Rahim Miya',
    age: 21,
    address: 'Dhaka',
    job: 'Job Holder'
}
console.log(rahim);
