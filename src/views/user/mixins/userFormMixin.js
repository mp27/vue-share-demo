import validateEmailMixin from "../../../mixins/validateEmailMixin";

export default {
    mixins: [validateEmailMixin],
    data() {
        return {
            user: {
                username: 'test',
                email: 'dinmixin'
            }
        }
    },
    created() {
        console.log('DIN MIXINS CREATED');
    },
    methods: {
        submit() {
            if (!this.user.username.length) {
                console.log('INCALID');
                return false;
            }

            if (!this.user.email.length || !this.validateEmail(this.user.email)) {
                console.log('invalid email');
                return false;
            }

            console.log('TRIMIS USER', this.user);
        }
    }
}