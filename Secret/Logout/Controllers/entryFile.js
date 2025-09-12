const CommonCookieName = "KSToken";

let postFilterDataFromBodyFunc = (req, res) => {
    res.clearCookie(CommonCookieName);

    // If the cookie was set with a specific path, you need to include it here:
    // res.clearCookie('mycookie', { path: '/some-specific-path' });

    res.send('Cookie deleted successfully');
};

export {
    postFilterDataFromBodyFunc
};