function showPopup() {
    document.getElementById("popupMessage").style.display = "block";
}

function closePopup() {
    document.getElementById('popupMessage').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        showPopup();
        const responseMessage = document.getElementById("responseMessage");
        responseMessage.textContent = "Terima kasih! Pesan Anda telah diterima.";
        this.reset();
    });
});