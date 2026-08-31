require('dotenv').config();

module.exports = {
	development: {
		username=process.env.DB_USERNAME,
        password=process.env.DB_PASSWORD,
        database=process.env.DB_NAME,
        host=process.env.DB_HOST,
        dialect=process.env.DB_DIALECT,
        base_url=process.env.BASE_URL,
        service_mail=process.env.SERVICE_EMAIL,
        host_mail=process.env.HOST_MAIL,
        port_mail=process.env.PORT_MAIL,
        secure_mail=process.env.SECURE_MAIL,
        user_mail=process.env.USER_MAIL,
        password_mail=process.env.PASSWORD_MAIL,
        from_mail=process.env.FROM_MAIL,
        admin_mail=process.env.ADMIN_MAIL,
        sms_token=process.env.SMS_TOKEN,
        sms_from=process.env.SMS_FROM,
        sms_api=process.env.SMS_API
	}
}