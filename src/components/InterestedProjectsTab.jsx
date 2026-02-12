import { useState } from "react";

const initialForm = {
  name: "",
  source: "instagram",
  referenceLink: "",
  coverImage: "",
  notes: "",
};

function LabelField({ label, required = false, children }) {
  return (
    <label className="form-control w-full gap-2">
      <span className="label-text text-sm font-medium">{label}{required ? " *" : ""}</span>
      {children}
    </label>
  );
}

export function InterestedProjectsTab() {
  const [form, setForm] = useState(initialForm);
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim()) return;

    setItems((prev) => [{ ...form, id: Date.now() }, ...prev]);
    setForm(initialForm);
  };

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Interested Project</h2>
        <p className="mt-1 text-sm text-base-content/70">Save patterns and inspirations to revisit later.</p>
      </div>

      <article className="card border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body">
          <h3 className="card-title text-lg">Add Interested Project</h3>

          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <LabelField label="Project/Pattern Name" required>
                <input className="input input-bordered" name="name" value={form.name} onChange={handleChange} required placeholder="Moby Sweater" />
              </LabelField>

              <LabelField label="Source">
                <select className="select select-bordered" name="source" value={form.source} onChange={handleChange}>
                  <option value="instagram">Instagram</option>
                  <option value="ravelry">Ravelry</option>
                  <option value="manual">Manual</option>
                </select>
              </LabelField>

              <LabelField label="Reference Link">
                <input className="input input-bordered" name="referenceLink" value={form.referenceLink} onChange={handleChange} placeholder="https://..." />
              </LabelField>

              <LabelField label="Cover Image URL">
                <input className="input input-bordered" name="coverImage" value={form.coverImage} onChange={handleChange} placeholder="https://..." />
              </LabelField>
            </div>

            <LabelField label="Notes">
              <textarea
                className="textarea textarea-bordered"
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={4}
                placeholder="Sizing, yarn ideas, reminders"
              />
            </LabelField>

            <div className="card-actions justify-end">
              <button type="submit" className="btn btn-primary">Save Interested Project</button>
            </div>
          </form>
        </div>
      </article>

      <article className="card border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body">
          <h3 className="card-title text-lg">Saved Interested Projects ({items.length})</h3>
          {items.length === 0 ? (
            <p className="text-sm text-base-content/70">No entries yet.</p>
          ) : (
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.id} className="rounded-box border border-base-300 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold">{item.name}</p>
                    <span className="badge badge-outline capitalize">{item.source}</span>
                  </div>
                  <p className="mt-1 text-sm text-base-content/70">{item.referenceLink || "No link provided"}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </article>

      <article className="alert border border-base-300 bg-base-100 shadow-sm">
        <div>
          <h3 className="text-base font-semibold">Future Integration</h3>
          <p className="text-sm text-base-content/70">
            Instagram and Ravelry integration can be added as a separate import feature after the core CRUD flow is stable.
          </p>
        </div>
      </article>
    </section>
  );
}
