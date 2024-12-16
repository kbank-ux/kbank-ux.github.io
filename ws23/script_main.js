$(document).ready(function () {
    $.ajax({
        url: 'wd.dat',
        dataType: 'text',
        success: function (correctPassword) {
            $('#submit').on('click', function () {
                const inputPassword = $('#password').val();
                const selectedMode = $('#mode').val();
                if (inputPassword === correctPassword.trim()) {
                    let targetPage = 'draw.html';
                    if (selectedMode === 'room') {
                        targetPage = 'room.html';
                    }
                    $.ajax({
                        url: targetPage,
                        dataType: 'html',
                        success: function (content) {
                            const parser = new DOMParser();
                            const htmlDoc = parser.parseFromString(content, 'text/html');

                            const headContent = htmlDoc.head.innerHTML;
                            const bodyContent = htmlDoc.body.innerHTML;

                            $('head').html(headContent);
                            $('body').html(bodyContent);
                        },
                        error: function () {
                            alert(targetPage + ' 파일을 불러오지 못했습니다.');
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
