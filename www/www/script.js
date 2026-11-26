window.addEventListener('DOMContentLoaded', () => {
    const digiBox = document.getElementById('digiBox');
    
    // অ্যাপ খোলার ০.৫ সেকেন্ড পর বক্সটি নিচ থেকে উপরে উঠবে
    setTimeout(() => {
        digiBox.classList.add('move-up');
    }, 500);
});
