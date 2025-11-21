// For now, in-memory store. Swap with Postgres/Prisma later.
const db = { releases: [] };

export async function listLatest() {
    // naive example; later: query per product, latest version
    return db.releases.slice(-20).reverse();
}

export async function create(payload) {
    const id = `rel_${Date.now()}`;
    const rec = { id, createdAt: new Date().toISOString(), ...payload };
    db.releases.push(rec);
    return rec;
}
