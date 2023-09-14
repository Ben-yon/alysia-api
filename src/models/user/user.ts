import { t } from 'elysia';

const User = t.Object({
    username: t.String(),
    password: t.String()
})

export default User