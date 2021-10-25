const { body, validationResult } = require('express-validator')

module.exports = {
    validateInfo: [
        body('nisn').isNumeric(),
        body('nama').not().isEmpty().trim().escape(),
        body('jenis_kelamin').not().isEmpty().trim().escape(),
        body('tahun_masuk').isNumeric(),
        body('tahun_lulus').isNumeric(),
        body('no_telp').isMobilePhone('id-ID'),
        body('alamat').not().isEmpty().trim().escape(),
        body('email').isEmail(),
        body('tanggal_lahir').isDate(),
        body('tempat_lahir').not().isEmpty().trim().escape(),
    ],
    result: (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next()
    }
}