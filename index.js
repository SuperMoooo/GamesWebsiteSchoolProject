document.addEventListener('DOMContentLoaded', function () {
    const eye_img = document.querySelector('.icon_eye');
    const eye_img_2 = document.querySelector('.icon_eye2');
    const passwordInput = document.getElementById('password');
    const verifyPasswordInput = document.getElementById('verify-password');
    const hideEye = 'icons/eye_hide.png';
    const showEye = 'icons/eye_show.png';
    let hideShowValue = 0;
    let hideShowValue2 = 0;

    eye_img.addEventListener('click', function hidePassword() {
        if (hideShowValue === 0) {
            eye_img.src = showEye;
            hideShowValue = 1;
            passwordInput.type = 'text';
        } else {
            eye_img.src = hideEye;
            hideShowValue = 0;
            passwordInput.type = 'password';
        }
    });

    eye_img_2.addEventListener('click', function hidePassword() {
        if (hideShowValue2 === 0) {
            eye_img_2.src = showEye;
            hideShowValue2 = 1;
            verifyPasswordInput.type = 'text';
        } else {
            eye_img_2.src = hideEye;
            hideShowValue2 = 0;
            verifyPasswordInput.type = 'password';
        }
    });
});
