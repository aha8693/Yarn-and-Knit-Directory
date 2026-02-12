import { useMemo, useState } from "react";

const initialForm = {
  name: "",
  brand: "",
  picture: "",
  color: "",
  fiberTypes: "",
  meterGrams: "",
  needleRecommendation: "",
  gauge: "",
  costPer100g: "",
  totalCost: "",
  yarnLink: "",
  relatedProjects: "",
  status: "IN_CLOSET",
};

function LabelField({ label, required = false, children }) {
  return (
    <label className="form-control w-full gap-2">
      <span className="label-text text-sm font-medium">{label}{required ? " *" : ""}</span>
      {children}
    </label>
  );
}

function YarnList({ title, data }) {
  return (
    <article className="card border border-base-300 bg-base-100 shadow-sm">
      <div className="card-body">
        <h3 className="card-title text-lg">{title} ({data.length})</h3>
        {data.length === 0 ? (
          <p className="text-sm text-base-content/70">No yarn entries yet.</p>
        ) : (
          <div className="space-y-2">
            {data.map((item) => (
              <div key={item.id} className="rounded-box border border-base-300 p-3">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-base-content/70">{item.brand || "Unknown brand"} | {item.color || "No color"}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function YarnClosetTab() {
  const [form, setForm] = useState(initialForm);
  const [yarns, setYarns] = useState([]);

  const closetYarns = useMemo(() => yarns.filter((item) => item.status === "IN_CLOSET"), [yarns]);
  const usedUpYarns = useMemo(() => yarns.filter((item) => item.status === "USED_UP"), [yarns]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim()) return;

    setYarns((prev) => [{ ...form, id: Date.now() }, ...prev]);
    setForm(initialForm);
  };

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Yarn Closet</h2>
        <p className="mt-1 text-sm text-base-content/70">Track stash and used-up yarn in one inventory form.</p>
      </div>

      <article className="card border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body">
          <h3 className="card-title text-lg">Add Yarn</h3>

          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <LabelField label="Yarn Name" required>
                <input className="input input-bordered" name="name" value={form.name} onChange={handleChange} required placeholder="Soft Wool DK" />
              </LabelField>

              <LabelField label="Status">
                <select className="select select-bordered" name="status" value={form.status} onChange={handleChange}>
                  <option value="IN_CLOSET">In Closet (Unused)</option>
                  <option value="USED_UP">Used Up</option>
                </select>
              </LabelField>

              <LabelField label="Brand">
                <input className="input input-bordered" name="brand" value={form.brand} onChange={handleChange} placeholder="Drops" />
              </LabelField>

              <LabelField label="Picture URL">
                <input className="input input-bordered" name="picture" value={form.picture} onChange={handleChange} placeholder="https://..." />
              </LabelField>

              <LabelField label="Color">
                <input className="input input-bordered" name="color" value={form.color} onChange={handleChange} placeholder="Moss Green" />
              </LabelField>

              <LabelField label="Fiber Types">
                <input className="input input-bordered" name="fiberTypes" value={form.fiberTypes} onChange={handleChange} placeholder="Merino, Nylon" />
              </LabelField>

              <LabelField label="Meter/Grams">
                <input className="input input-bordered" name="meterGrams" value={form.meterGrams} onChange={handleChange} placeholder="220m / 100g" />
              </LabelField>

              <LabelField label="Typical Needle Recommendation">
                <input className="input input-bordered" name="needleRecommendation" value={form.needleRecommendation} onChange={handleChange} placeholder="4.0mm" />
              </LabelField>

              <LabelField label="Gauge">
                <input className="input input-bordered" name="gauge" value={form.gauge} onChange={handleChange} placeholder="21 sts" />
              </LabelField>

              <LabelField label="Cost per 100g">
                <input className="input input-bordered" name="costPer100g" value={form.costPer100g} onChange={handleChange} placeholder="$12" />
              </LabelField>

              <LabelField label="Total Cost">
                <input className="input input-bordered" name="totalCost" value={form.totalCost} onChange={handleChange} placeholder="$36" />
              </LabelField>

              <LabelField label="Yarn Link">
                <input className="input input-bordered" name="yarnLink" value={form.yarnLink} onChange={handleChange} placeholder="https://..." />
              </LabelField>
            </div>

            <LabelField label="Related Project Links">
              <textarea
                className="textarea textarea-bordered"
                name="relatedProjects"
                value={form.relatedProjects}
                onChange={handleChange}
                rows={3}
                placeholder="One or more links"
              />
            </LabelField>

            <div className="card-actions justify-end">
              <button type="submit" className="btn btn-primary">Save Yarn</button>
            </div>
          </form>
        </div>
      </article>

      <div className="grid gap-4 md:grid-cols-2">
        <YarnList title="In Closet (Unused)" data={closetYarns} />
        <YarnList title="Used Up" data={usedUpYarns} />
      </div>
    </section>
  );
}
