$(document).ready(function () {
    $.ajax({
        url: 'wd.dat',
        dataType: 'text',
        success: function (correctPassword) {
            $('#submit').on('click', function () {
                const inputPassword = $('#password').val();
                if (inputPassword === correctPassword.trim()) {
                    $('.password-container').hide();
                    $('.content').show();
                } else {
                    $('.error-message').show();
                }
            });
        },
        error: function () {
            alert('비밀번호 파일을 불러오지 못했습니다.');
        }
    });
});
