
document.getElementById('download-trigger').addEventListener('click', function() {
    const msg = document.getElementById('download-message');
    const button = this;
    
    button.innerText = "A Processar Compilação...";
    button.disabled = true;
    msg.style.display = 'block';

    setTimeout(() => {
        button.innerText = "Descarregar Código Fonte (.ZIP)";
        button.disabled = false;
        msg.style.display = 'none';
        
        // Executa o download real do ficheiro hospedado no seu GitHub
        window.location.href = "template1.zip";
    }, 2000);
});