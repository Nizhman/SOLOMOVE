function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const asal = document.getElementById("asal").value;
    const tujuan = document.getElementById("tujuan").value;
    const tanggal = document.getElementById("tanggal").value;
    const jumlah = document.getElementById("jumlah").value;

    // Store data in localStorage
    localStorage.setItem("asal", asal);
    localStorage.setItem("tujuan", tujuan);
    localStorage.setItem("tanggal", tanggal);
    localStorage.setItem("jumlah", jumlah);

    // Redirect to page 2
    window.location.href = "pilihanBis.html";
  }