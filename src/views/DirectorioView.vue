<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">Registro oficial</div>
        <h1>Directorio de<br><em class="gold">certificados</em></h1>
        <p class="lead" style="margin-top:18px;">
          Verificá la autenticidad de cualquier certificación emitida por ASCAD LATAM.
          Cada entrada incluye un código único de verificación.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="controls">
          <input
            v-model="search"
            class="dir-input"
            type="text"
            placeholder="Buscar por nombre o código…"
          />
          <select v-model="filterCert" class="dir-select">
            <option value="">Todas las certificaciones</option>
            <option v-for="c in certOptions" :key="c">{{ c }}</option>
          </select>
          <select v-model="filterCountry" class="dir-select">
            <option value="">Todos los países</option>
            <option v-for="p in countryOptions" :key="p">{{ p }}</option>
          </select>
        </div>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Profesional</th>
                <th>Certificación</th>
                <th>País</th>
                <th>Vigencia</th>
                <th>Código</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in filtered" :key="row.id">
                <td class="td-name">{{ row.nombre }}</td>
                <td><span class="cert-badge">{{ row.cert }}</span></td>
                <td>{{ row.pais }}</td>
                <td class="td-date">{{ row.vigencia }}</td>
                <td><span class="dir-code">{{ row.codigo }}</span></td>
                <td>
                  <span class="status-pill" :class="`status-${row.estado}`">
                    {{ row.estado.charAt(0).toUpperCase() + row.estado.slice(1) }}
                  </span>
                </td>
              </tr>
              <tr v-if="filtered.length === 0">
                <td colspan="6" class="no-results">No se encontraron resultados para la búsqueda.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="table-note">
          Este directorio es de carácter público. Los datos son actualizados periódicamente por ASCAD LATAM.
          Para reportar inconsistencias, escribí a <a href="mailto:info@ascadlatam.org">info@ascadlatam.org</a>.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const search = ref('')
const filterCert = ref('')
const filterCountry = ref('')

const certOptions = ['OST', 'ER', 'CCAAD I', 'CCAAD II', 'CCAAD III', 'CCAAD IV']
const countryOptions = ['Argentina', 'Brasil', 'Chile', 'Colombia', 'Costa Rica', 'Ecuador', 'México', 'Panamá', 'Paraguay', 'Perú', 'Uruguay']

// Datos de ejemplo — en producción vendrán de la API backend
const records = ref([
  { id: 1, nombre: 'Nombre Apellido', cert: 'CCAAD II',  pais: 'Costa Rica', vigencia: 'Ene 2025 – Ene 2027', codigo: 'ASC-2025-00142', estado: 'vigente'    },
  { id: 2, nombre: 'Nombre Apellido', cert: 'CCAAD III', pais: 'México',     vigencia: 'Mar 2024 – Mar 2026', codigo: 'ASC-2024-00098', estado: 'vigente'    },
  { id: 3, nombre: 'Nombre Apellido', cert: 'OST',       pais: 'Colombia',   vigencia: 'Jun 2023 – Jun 2025', codigo: 'ASC-2023-00054', estado: 'vencido'    },
  { id: 4, nombre: 'Nombre Apellido', cert: 'ER', pais: 'Argentina',  vigencia: 'Sep 2024 – Sep 2026', codigo: 'ASC-2024-00201', estado: 'vigente'    },
  { id: 5, nombre: 'Nombre Apellido', cert: 'CCAAD I',   pais: 'Perú',       vigencia: 'Nov 2023 – Nov 2025', codigo: 'ASC-2023-00177', estado: 'suspendido' },
])

const filtered = computed(() => {
  const q = search.value.toLowerCase().trim()
  return records.value.filter(r => {
    const matchQ = !q || r.nombre.toLowerCase().includes(q) || r.codigo.toLowerCase().includes(q)
    const matchC = !filterCert.value || r.cert === filterCert.value
    const matchP = !filterCountry.value || r.pais === filterCountry.value
    return matchQ && matchC && matchP
  })
})
</script>

<style scoped>
.controls {
  display: grid; grid-template-columns: 1fr auto auto;
  gap: 12px; margin-bottom: 24px;
}
.dir-input, .dir-select {
  background: var(--surface); border: 1px solid var(--line);
  border-radius: var(--radius-sm); color: var(--text);
  font-family: var(--font-body); font-size: .88rem;
  padding: 12px 16px; outline: none; transition: border-color .2s;
}
.dir-input:focus, .dir-select:focus { border-color: var(--accent); }
.dir-input::placeholder { color: var(--text-muted); }
.dir-select option { background: var(--surface-alt); }

.table-wrap {
  background: var(--surface); border: 1px solid var(--line);
  border-radius: var(--radius-lg); overflow: hidden; overflow-x: auto;
}
table { width: 100%; border-collapse: collapse; min-width: 700px; }
thead { background: var(--surface-alt); border-bottom: 1px solid var(--line); }
th {
  padding: 16px 20px; text-align: left;
  font-family: var(--font-mono); font-size: .68rem;
  letter-spacing: .15em; color: var(--accent); text-transform: uppercase;
}
td { padding: 16px 20px; font-size: .9rem; border-bottom: 1px solid var(--line); }
tbody tr:last-child td { border-bottom: none; }
tbody tr { transition: background .15s; }
tbody tr:hover { background: var(--surface-alt); }
.td-name { font-weight: 500; color: var(--text); }
.td-date { font-size: .82rem; color: var(--text-muted); }
.dir-code { font-family: var(--font-mono); font-size: .78rem; color: var(--text-muted); }
.no-results { text-align: center; color: var(--text-muted); padding: 40px; font-style: italic; }

.status-pill {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: .78rem; font-weight: 600; padding: 5px 12px; border-radius: 999px;
}
.status-pill::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.status-vigente    { background: rgba(52,211,153,.1); color: #34d399; }
.status-vencido    { background: rgba(251,191,36,.1);  color: #fbbf24; }
.status-suspendido { background: rgba(239,68,68,.1);   color: #ef4444; }

.table-note { margin-top: 16px; font-size: .82rem; color: var(--text-muted); }
.table-note a { color: var(--accent); text-decoration: underline; }

@media (max-width: 768px) { .controls { grid-template-columns: 1fr; } }
</style>
