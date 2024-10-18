const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const authRoutes = require('./routes/auth');
const path = require('path');

// Inisialisasi aplikasi Express
const app = express();

// Set EJS sebagai template engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Konfigurasi session
app.use(session({
    secret: 'secret', // Ganti dengan secret yang lebih kuat
    resave: false,
    saveUninitialized: true
}));

// Set folder static
app.use(express.static(path.join(__dirname, 'public')));

// Middleware untuk memeriksa status login
app.use((req, res, next) => {
    // Jika user belum login dan mencoba mengakses halaman selain login/register
    if (!req.session.user && req.path !== '/auth/login' && req.path !== '/auth/register') {
        return res.redirect('/auth/login');
    }
    // Jika user sudah login dan mencoba mengakses halaman root, redirect ke profile
    else if (req.session.user && req.path === '/') {
        return res.redirect('/auth/profile');
    }
    next();
});

// Routes
app.use('/auth', authRoutes);

// Route utama: Redirect ke /auth/login atau /auth/profile berdasarkan session
app.get('/', (req, res) => {
    if (req.session.user) {
        return res.redirect('/auth/profile');
    } else {
        return res.redirect('/auth/login');
    }
});

// Jalankan server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});