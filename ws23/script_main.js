$(document).ready(function () {
    $.ajax({
        url: 'wd.dat',
        dataType: 'text',
        success: function (correctPassword) {
            $('#submit').on('click', function () {
                const inputPassword = $('#password').val();
                if (inputPassword === correctPassword.trim()) {
                    $.ajax({
                        url: 'draw.html',
                        dataType: 'html',
                        success: function (content) {
                            $('body').html(content);
                        },
                        error: function () {
                            alert('draw.html 파일을 불러오지 못했습니다.');
                        }
                    });
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
