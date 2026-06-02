// Pequena interatividade para destacar o passo ativo ao clicar
document.querySelectorAll('.kyc-step').forEach(step => {
    step.addEventListener('click', () => {
        document.querySelectorAll('.kyc-step').forEach(s => s.style.borderColor = '#222222');
        step.style.borderColor = '#00F0FF';
    });
});