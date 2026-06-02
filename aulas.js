document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Sistema de Troca de Abas (Explorar / Estudar)
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove classe ativa de todos os botões
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Oculta todos os conteúdos
            tabContents.forEach(content => content.classList.remove('active-content'));

            // Ativa o botão atual
            button.classList.add('active');
            
            // Exibe o conteúdo correspondente baseado no atributo 'data-tab'
            const targetTab = button.getAttribute('data-tab');
            document.getElementById(`tab-${targetTab}`).classList.add('active-content');
        });
    });

    // Simulação de clique interativo no Player de Vídeo
    const videoPlayer = document.querySelector('.video-player-placeholder');
    if (videoPlayer) {
        videoPlayer.addEventListener('click', () => {
            videoPlayer.style.background = '#000';
            videoPlayer.innerHTML = `
                <iframe width="100%" height="100%" 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen style="position: absolute; top:0; left:0; width:100%; height:100%;">
                </iframe>`;
        });
    }
});