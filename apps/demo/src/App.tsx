import React from 'react'

function Card({title, children}:{title:string, children:React.ReactNode}){
  return (
    <div className="rounded-2xl border p-6 shadow-sm bg-white dark:bg-slate-800">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">{children}</div>
    </div>
  )
}

export default function App(){
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">UDF Demo — React + Tailwind</h1>
          <p className="mt-2 text-slate-600">Ukázka komponent ve *shadcn-style* (Tailwind + utility-first).</p>
        </header>

        <section className="grid gap-4">
          <Card title="Card example">
            Toto je jednoduchá karta. Můžeš sem vložit vlastní obsah, formuláře nebo interakce.
          </Card>

          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 text-white">Primary</button>
            <button className="px-4 py-2 rounded-md border">Secondary</button>
          </div>
        </section>
      </div>
    </div>
  )
}
