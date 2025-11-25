import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function LiveFormPreview() {
  const [form, setForm] = useState({ name: "", email: "", age: "" });
  const [touched, setTouched] = useState({ name: false, email: false, age: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
   
    if (name === "age") {
      const cleaned = value.replace(/[^0-9]/g, "").slice(0, 3);
      setForm((s) => ({ ...s, [name]: cleaned }));
      return;
    }

    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
  };

  const validate = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Nome é obrigatório.";
    if (!form.email.trim()) errors.email = "Email é obrigatório.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Formato de email inválido.";
    if (!form.age) errors.age = "Idade é obrigatória.";
    else if (Number(form.age) <= 0) errors.age = "Idade deve ser maior que 0.";
    return errors;
  };

  const errors = validate();

  return (
    <div className="min-h-screen flex items-start justify-center bg-slate-50 p-6 dark:bg-slate-900">
      <div className="w-full max-w-3xl bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 sm:p-10">
        <h1 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">Formulário — Preview em tempo real</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()} aria-label="Formulário de entrada de dados">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-200">Nome</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="João Silva"
                className={`mt-1 block w-full rounded-lg border px-3 py-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-100 ${
                  touched.name && errors.name ? "border-red-400" : "border-slate-200"
                }`}
                aria-invalid={!!(touched.name && errors.name)}
                aria-describedby={touched.name && errors.name ? "name-error" : undefined}
              />
              {touched.name && errors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="exemplo@dominio.com"
                className={`mt-1 block w-full rounded-lg border px-3 py-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-100 ${
                  touched.email && errors.email ? "border-red-400" : "border-slate-200"
                }`}
                aria-invalid={!!(touched.email && errors.email)}
                aria-describedby={touched.email && errors.email ? "email-error" : undefined}
              />
              {touched.email && errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="age" className="block text-sm font-medium text-slate-700 dark:text-slate-200">Idade</label>
              <input
                id="age"
                name="age"
                type="text"
                inputMode="numeric"
                value={form.age}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="25"
                className={`mt-1 block w-full rounded-lg border px-3 py-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-100 ${
                  touched.age && errors.age ? "border-red-400" : "border-slate-200"
                }`}
                aria-invalid={!!(touched.age && errors.age)}
                aria-describedby={touched.age && errors.age ? "age-error" : undefined}
              />
              {touched.age && errors.age && (
                <p id="age-error" className="mt-1 text-xs text-red-500">{errors.age}</p>
              )}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setForm({ name: "", email: "", age: "" })}
                className="rounded-md px-4 py-2 text-sm font-medium bg-slate-100 dark:bg-slate-700 hover:brightness-95"
              >
                Limpar
              </button>
            </div>
          </form>

          <div className="col-span-1 md:col-span-1">
            <h2 className="text-lg font-medium text-slate-800 dark:text-slate-100 mb-2">Preview em tempo real</h2>

            <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-800">
              <div className="mb-3">
                <p className="text-xs text-slate-500">Nome</p>
                <p className="text-base font-semibold text-slate-900 dark:text-slate-50">{form.name || <span className="text-slate-400">...</span>}</p>
              </div>

              <div className="mb-3">
                <p className="text-xs text-slate-500">Email</p>
                <p className="text-base font-semibold text-slate-900 dark:text-slate-50">{form.email || <span className="text-slate-400">...</span>}</p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Idade</p>
                <p className="text-base font-semibold text-slate-900 dark:text-slate-50">{form.age || <span className="text-slate-400">...</span>}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700">
                {Object.keys(errors).length === 0 ? (
                  <p className="text-sm text-green-600 dark:text-green-400">Todos os campos válidos ✅</p>
                ) : (
                  <p className="text-sm text-amber-600 dark:text-amber-400">Alguns campos precisam ser corrigidos</p>
                )}
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-500">Os dados aparecem abaixo em tempo real enquanto você digita. Experimente preencher ou limpar o formulário.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
