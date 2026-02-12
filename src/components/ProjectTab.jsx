import { useState } from "react";

const initialForm = {
  name: "",
  status: "WIP",
  picture: "",
  patternLink: "",
  yarnDetails: "",
  needleUsed: "",
  meterGramsUsed: "",
  gauge: "",
  totalLength: "",
  armhole: "",
  bustWidth: "",
  armLength: "",
};

function LabelField({ label, required = false, children }) {
  return (
    <label className="form-control w-full gap-2">
      <span className="label-text text-sm font-medium">{label}{required ? " *" : ""}</span>
      {children}
    </label>
  );
}

export function ProjectTab() {
  const [form, setForm] = useState(initialForm);
  const [projects, setProjects] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim()) return;

    setProjects((prev) => [{ ...form, id: Date.now() }, ...prev]);
    setForm(initialForm);
  };

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Projects</h2>
        <p className="mt-1 text-sm text-base-content/70">Create and track projects by FO, WIP, and Planning status.</p>
      </div>

      <article className="card border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body">
          <h3 className="card-title text-lg">Add Project</h3>

          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <LabelField label="Project Name" required>
                <input
                  className="input input-bordered"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Cloud Cardigan"
                />
              </LabelField>

              <LabelField label="Status">
                <select className="select select-bordered" name="status" value={form.status} onChange={handleChange}>
                  <option value="FO">FO</option>
                  <option value="WIP">WIP</option>
                  <option value="PLANNING">Planning</option>
                </select>
              </LabelField>

              <LabelField label="Picture URL">
                <input className="input input-bordered" name="picture" value={form.picture} onChange={handleChange} placeholder="https://..." />
              </LabelField>

              <LabelField label="Pattern Link">
                <input className="input input-bordered" name="patternLink" value={form.patternLink} onChange={handleChange} placeholder="https://..." />
              </LabelField>

              <LabelField label="Yarn / Color / LOT">
                <input className="input input-bordered" name="yarnDetails" value={form.yarnDetails} onChange={handleChange} placeholder="Merino, Cream, LOT-27" />
              </LabelField>

              <LabelField label="Needle Used">
                <input className="input input-bordered" name="needleUsed" value={form.needleUsed} onChange={handleChange} placeholder="4.5mm" />
              </LabelField>

              <LabelField label="Meter / Grams Used">
                <input className="input input-bordered" name="meterGramsUsed" value={form.meterGramsUsed} onChange={handleChange} placeholder="850m / 420g" />
              </LabelField>

              <LabelField label="Gauge">
                <input className="input input-bordered" name="gauge" value={form.gauge} onChange={handleChange} placeholder="22 sts x 30 rows" />
              </LabelField>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold">Finished Dimensions</p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <LabelField label="Total Length">
                  <input className="input input-bordered" name="totalLength" value={form.totalLength} onChange={handleChange} placeholder="58 cm" />
                </LabelField>
                <LabelField label="Armhole">
                  <input className="input input-bordered" name="armhole" value={form.armhole} onChange={handleChange} placeholder="21 cm" />
                </LabelField>
                <LabelField label="Bust Width">
                  <input className="input input-bordered" name="bustWidth" value={form.bustWidth} onChange={handleChange} placeholder="50 cm" />
                </LabelField>
                <LabelField label="Arm Length">
                  <input className="input input-bordered" name="armLength" value={form.armLength} onChange={handleChange} placeholder="44 cm" />
                </LabelField>
              </div>
            </div>

            <div className="card-actions justify-end">
              <button type="submit" className="btn btn-primary">Save Project</button>
            </div>
          </form>
        </div>
      </article>

      <article className="card border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body">
          <h3 className="card-title text-lg">Saved Projects ({projects.length})</h3>
          {projects.length === 0 ? (
            <p className="text-sm text-base-content/70">No projects added yet.</p>
          ) : (
            <div className="space-y-2">
              {projects.map((project) => (
                <div key={project.id} className="rounded-box border border-base-300 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold">{project.name}</p>
                    <span className="badge badge-outline">{project.status}</span>
                  </div>
                  <p className="mt-1 text-sm text-base-content/70">{project.yarnDetails || "No yarn details"}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </article>
    </section>
  );
}
