document.addEventListener('DOMContentLoaded', () => {
    // Seleção de Elementos das Telas
    const boxLogin = document.getElementById('box-login');
    const boxRegister = document.getElementById('box-register');
    const goToRegister = document.getElementById('go-to-register');
    const goToLogin = document.getElementById('go-to-login');

    // Seleção de Elementos do Modal
    const formRegister = document.getElementById('form-register');
    const alertModal = document.getElementById('alert-modal');
    const btnModalYes = document.getElementById('btn-modal-yes');
    const btnModalNo = document.getElementById('btn-modal-no');

    // Alternar para Tela de Cadastro
    goToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        boxLogin.classList.remove('active-box');
        boxRegister.classList.add('active-box');
    });

    // Alternar para Tela de Login
    goToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        boxRegister.classList.remove('active-box');
        boxLogin.classList.add('active-box');
    });

    // Disparar Modal de Lembrete ao enviar formulário de Cadastro
    formRegister.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio imediato para processar o modal
        alertModal.classList.add('open-modal');
    });

    // Ação: Escolheu "Sim" no Modal
    btnModalYes.addEventListener('click', () => {
        alertModal.classList.remove('open-modal');
        alert('Conta criada com sucesso! Você receberá os lembretes das aulas no seu e-mail.');
        // Aqui você adicionaria a lógica para salvar no banco de dados com a preferência ativa
        window.location.href = 'aulas.html'; // Redireciona para o painel de aulas
    });

    // Ação: Escolheu "Não" no Modal
    btnModalNo.addEventListener('click', () => {
        alertModal.classList.remove('open-modal');
        alert('Conta criada com sucesso! Sem envios extras de lembretes.');
        window.location.href = 'aulas.html'; // Redireciona para o painel de aulas
    });

    // Simulação do clique "Continuar com o Google"
    const googleButtons = document.querySelectorAll('.btn-google');
    googleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Integração com a API do Google Cloud simulada com sucesso!');
        });
    });
});