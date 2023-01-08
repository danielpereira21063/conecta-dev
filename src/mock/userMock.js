import mock from "../utils/mock";

mock.onPost("/api/home/login").reply((config) => {
    const { email, password } = JSON.parse(config.data);

    if (email != 'danielsanches6301@gmail.com' || password != 'admin') {
        return [
            400,
            { message: 'Email ou senha incorretos' }
        ];
    }

    const user = {
        'id': 1,
        'userName': 'danielsanches',
        'email': 'danielsanches6301@gmail.com'
    };

    return [
        200,
        user
    ];
});