let modal = () => {
    function bindModal(btnTrigger, modalTrigger, closeTrigger) {
        let btn = document.querySelector(btnTrigger),
            modal = document.querySelector(modalTrigger),
            close = document.querySelector(closeTrigger);

        btn.addEventListener('click', () => {
            modal.style.display = 'block';
        });
        close.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    bindModal('.middle__btn' ,'#myModalForm', '.modal__close')
    bindModal('.contact__btn' ,'#myModalThanks', '.modal__close');
};

export default modal;