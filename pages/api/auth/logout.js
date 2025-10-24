export default async function handler(req, res) {
	// Clear JWT cookie by setting it expired
	res.setHeader('Set-Cookie', 'token=; Path=/; HttpOnly; Max-Age=0; SameSite=Lax');
	return res.status(200).json({ ok: true });
}
