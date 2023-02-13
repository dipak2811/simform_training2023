let showdata = () => {
    if (localStorage.getItem('Allproduct') == null) {
        return true;
    }
    let productlist;
    document.getElementById('product_table').innerHTML = null;
    if (localStorage.getItem('flag-search') == null || localStorage.getItem('flag-search') == 0) {
        productlist = JSON.parse(localStorage.getItem('Allproduct'));
    }
    if (localStorage.getItem('flag-search') == 1) {
        productlist = JSON.parse(localStorage.getItem('Sortedproduct'));
    }
    console.log()
    if (productlist.length == 0) {
        return;
    }
    var html_element = "<tr>";
    productlist.forEach((item, ind) => {
        for (let element in item) {
            if (element == "product_image") {
                html_element += '<td id="product_img"> <img src="' + item[element] + '" id="img" /> </td>';
                html_element += '<td><button onclick="deleteData(' + ind + ')" class="btn btn-danger">Delete</button></td><td><button onclick="updateData(' + ind + ')" class="btn btn-primary">Update</button></td>';
            }
            else {
                html_element += "<td>" + item[element] + "</td>";
            }
        };
        html_element += "</tr>";
        document.getElementById('product_table').innerHTML = html_element;
    });
}

document.onload = showdata();
let submitproduct = () => {
    const product_id = Date.now();
    const product_name = document.querySelector('#product_name').value;
    const product_price = document.querySelector('#product_price').value;
    const product_description = document.querySelector('#product_description').value;
    const product_image = document.querySelector('#product_image').files[0];
    let product = {};
    let flag = validate(product_name, product_price, product_description);
    if (!isvalid(product_name)) {
        alert("Product Already Exists");
        document.getElementById('product_name').value = "";
        document.getElementById('product_price').value = "";
        document.getElementById('product_description').value = "";
        document.getElementById('product_image').value = "";
    }
    else if (flag) {
        let x;
        let reader = new FileReader();
        reader.readAsDataURL(product_image);
        reader.addEventListener('load', () => {
            let Allproduct = [];
            x = reader.result;
            product.product_id = product_id;
            product.product_name = product_name;
            product.product_price = product_price;
            product.product_description = product_description;
            product.product_image = x;
            if (localStorage.getItem('Allproduct') === null) {
                Allproduct.push(product);
                localStorage.setItem('Allproduct', JSON.stringify(Allproduct));
            }
            else {
                Allproduct = JSON.parse(localStorage.getItem('Allproduct'));
                Allproduct.push(product);
                localStorage.setItem('Allproduct', JSON.stringify(Allproduct));
            }
            document.getElementById('product_name').value = "";
            document.getElementById('product_price').value = "";
            document.getElementById('product_description').value = "";
            document.getElementById('product_image').value = "";
            showdata();
        });
    }

}

let isvalid = (product_name1) => {
    if (localStorage.getItem('Allproduct') == null) {
        return true;
    }
    let productlist = JSON.parse(localStorage.getItem('Allproduct'));
    for (let element of productlist) {
        if (element.product_name == product_name1) {
            return false;
        }
    }
    return true;
}

let deleteData = (ind) => {
    let productlist;
    if (localStorage.getItem('Allproduct').length == 0) {
        productlist = [];
        showdata();
    }
    else {
        productlist = JSON.parse(localStorage.getItem('Allproduct'));
    }
    productlist.splice(ind, 1);
    alert("Product Deleted Successfully !!");
    localStorage.setItem('Allproduct', JSON.stringify(productlist));
    showdata();
}

let validate = (product_name, product_price, product_description) => {
    let flag = true;
    if (product_name == "") {
        alert("Plaese enter name !!");
        flag = false;
    }
    else if (product_price == "") {
        alert(" Price is  required!!");
        flag = false;
    }
    else if (isNaN(product_price)) {
        alert(" Price must be a Number !!");
        flag = false;
    }
    else if (product_price < 0) {
        alert(" Price must be > 0 !!");
        flag = false;
    }
    else if (product_description == "") {
        alert(" Description is  required!!");
        flag = false;
    }
    return flag;
}

let updateData = (ind) => {
    let productlist = JSON.parse(localStorage.getItem('Allproduct'));
    document.getElementById('product_name').value = productlist[ind].product_name;
    document.getElementById('product_price').value = productlist[ind].product_price;
    document.getElementById('product_description').value = productlist[ind].product_description;
    document.getElementById('singlebutton').style.display = "none";
    document.getElementById('singlebutton1').style.display = "inline";
    localStorage.setItem('update_data_index', ind);
}

let Update_data = () => {
    const ind = localStorage.getItem('update_data_index');
    let productlist = JSON.parse(localStorage.getItem('Allproduct'));
    const product_name = document.querySelector('#product_name').value;
    const product_price = Number(document.querySelector('#product_price').value);
    const product_description = document.querySelector('#product_description').value;
    const product_image = document.querySelector('#product_image').files[0];
    let flag = validate(product_name, product_price, product_description);
    if (flag) {
        document.getElementById('product_name').value = "";
        document.getElementById('product_price').value = "";
        document.getElementById('product_description').value = "";
        document.getElementById('product_image').value = "";
        let x;
        if (typeof (product_image) !== "undefined") {
            let reader = new FileReader();
            reader.readAsDataURL(product_image);
            reader.addEventListener('load', () => {
                x = reader.result;
                productlist[ind].product_name = product_name;
                productlist[ind].product_price = product_price;
                productlist[ind].product_description = product_description;
                productlist[ind].product_image = x;
                localStorage.setItem('Allproduct', JSON.stringify(productlist));
                document.getElementById('singlebutton1').style.display = "none";
                document.getElementById('singlebutton').style.display = "inline";
                showdata();
            });
        }
        else {
            productlist[ind].product_name = product_name;
            productlist[ind].product_price = product_price;
            productlist[ind].product_description = product_description;
            localStorage.setItem('Allproduct', JSON.stringify(productlist));
            document.getElementById('singlebutton1').style.display = "none";
            document.getElementById('singlebutton').style.display = "inline";
            showdata();
        }
    }
}

search_item = () => {
    const search_val = document.querySelector('#search_value').value;
    document.querySelector('#bt1').style.display = "none";
    document.querySelector('#bt2').style.display = "inline";
    if (localStorage.getItem('Allproduct') == null) {
        alert("Product List is Not Added Yet!!!");
    }
    else {
        if ((localStorage.getItem('Allproduct')).length == 0) {
            alert("Product List is Empty!!!");
        }
        else {
            let productlist = JSON.parse(localStorage.getItem('Allproduct'));
            let sorted = [];
            let regex = new RegExp(search_val, "i")
            for (let element of productlist) {
                const item = element.product_name;
                if (regex.test(item)) {
                    sorted.push(element);
                }
            }
            localStorage.setItem('flag-search', 1);
            localStorage.setItem('Sortedproduct', JSON.stringify(sorted));
            showdata();
        }
    }
}

clear_search = () => {
    document.querySelector('#search_value').value=null;
    localStorage.setItem('flag-search', 0);
    document.querySelector('#bt2').style.display = "none";
    document.querySelector('#bt1').style.display = "inline";
    showdata();
}

function sortascending() {
    let productlist;
    if (localStorage.getItem('flag-search') == null || localStorage.getItem('flag-search') == 0) {
        productlist = JSON.parse(localStorage.getItem('Allproduct'));
    }
    else if (localStorage.getItem('flag-search') == 1) {
        productlist = JSON.parse(localStorage.getItem('Sortedproduct'));
    }
    productlist.sort((a, b) => {
        return a.product_price - b.product_price;
    });
    if (localStorage.getItem('flag-search') == null || localStorage.getItem('flag-search') == 0) {
        localStorage.setItem('Allproduct', JSON.stringify(productlist));
    }
    else if (localStorage.getItem('flag-search') == 1) {
        localStorage.setItem('Sortedproduct', JSON.stringify(productlist));
    }
    showdata();
}
function sortdescending() {
    let productlist;
    if (localStorage.getItem('flag-search') == null || localStorage.getItem('flag-search') == 0) {
        productlist = JSON.parse(localStorage.getItem('Allproduct'));
    }
    else if (localStorage.getItem('flag-search') == 1) {
        productlist = JSON.parse(localStorage.getItem('Sortedproduct'));
    }
    productlist.sort((a, b) => {
        return b.product_price - a.product_price;
    });
    if (localStorage.getItem('flag-search') == null || localStorage.getItem('flag-search') == 0) {
        localStorage.setItem('Allproduct', JSON.stringify(productlist));
    }
    else if (localStorage.getItem('flag-search') == 1) {
        localStorage.setItem('Sortedproduct', JSON.stringify(productlist));
    }
    showdata();
}