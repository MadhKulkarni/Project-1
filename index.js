const suppliers = [
    { id: 1, name: 'NIKE', contact: '9970311528', rating: 3.9, status: 'pending' },
    { id: 2, name: 'PUMA', contact: '8788149344', rating: 4.9, status: 'delivered' },
    { id: 3, name: 'SKECHERS', contact: '9760311528', rating: 5.0, status: 'pending' },

];


$(document).ready(function () {
    $("#btnpending").click(function () {
        const pendingSuppliers = suppliers.filter(supplier => supplier.status.toLowerCase() === 'pending');
        renderSuppliers(pendingSuppliers);
    });
});

function renderSuppliers(filteredSuppliers) {
    const supplierListElement = document.getElementById('supplier-list');
    supplierListElement.innerHTML = `<h2> Suppliers</h2>`;
}

$(document).ready(function () {
    $("#btndelivered").click(function () {
        const deliveredSuppliers = suppliers.filter(supplier => supplier.status.toLowerCase() === 'delivered');
        renderSuppliers(deliveredSuppliers);
    });
});

const openProductPage = (name) => {
    sessionStorage.setItem("passedparam", name);
    window.location.href = "product.html";
}


function renderSuppliers(filteredSuppliers) {
    const supplierListElement = document.getElementById('supplier-list');
    supplierListElement.innerHTML = `<h2> Suppliers</h2>`;
    
    


    filteredSuppliers.forEach(supplier => {
        const supplierElement = document.createElement('div');
        supplierElement.classList.add('supplier');
        supplierElement.innerHTML = `
       
        <h2><a href="product.html" onclick="openProductPage('${supplier.name}')">${supplier.name}</a></h2>
          
            <p>Contact: ${supplier.contact}</p>
            <p>Rating: ${supplier.rating}</p>
            <p>Status: ${supplier.status}</p>
            <button class="feedback-btn" onclick="submitFeedback(${supplier.id})">Leave Feedback</button>
        `

            ;
        supplierListElement.appendChild(supplierElement);



    });
}
    

    function openFeedbackModal() {
        document.getElementById('feedbackModal').style.display = 'block';
    }

    function closeFeedbackModal() {
        document.getElementById('feedbackModal').style.display = 'none';
    }

    function submitFeedback() {
        const feedbackText = document.getElementById('feedbackText').value;
        console.log('Feedback submitted:', feedbackText);

        // Close the modal
        closeFeedbackModal();
    }
    //




// Initial render on page load
renderSuppliers(suppliers);