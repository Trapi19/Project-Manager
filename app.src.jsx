// Fuente editable de la aplicación React.
// ---------------------------------------------------------
// IMPORTANTE: edita este archivo y ejecuta ./build-precompile.sh
// para regenerar app.bundle.js. No edites app.bundle.js a mano.
//
// Este archivo recupera la fuente que faltaba en el repositorio;
// actualmente conserva la sintaxis compilable React.createElement
// para garantizar que el bundle generado sea equivalente.


// @ts-nocheck
// COMPONENTES REACT (APP PRINCIPAL) ---
const { useState, useEffect } = React;
const Icons = {
    check: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        React.createElement("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        React.createElement("polyline", { points: "22 4 12 14.01 9 11.01" })),
    clock: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
        React.createElement("polyline", { points: "12 6 12 12 16 14" })),
    wifi: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        React.createElement("path", { d: "M5 12.55a11 11 0 0 1 14.08 0" }),
        React.createElement("path", { d: "M1.42 9a16 16 0 0 1 21.16 0" }),
        React.createElement("path", { d: "M8.53 16.11a6 6 0 0 1 6.95 0" }),
        React.createElement("line", { x1: "12", y1: "20", x2: "12.01", y2: "20" })),
    server: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        React.createElement("rect", { x: "2", y: "2", width: "20", height: "8", rx: "2", ry: "2" }),
        React.createElement("rect", { x: "2", y: "14", width: "20", height: "8", rx: "2", ry: "2" }),
        React.createElement("line", { x1: "6", y1: "6", x2: "6.01", y2: "6" }),
        React.createElement("line", { x1: "6", y1: "18", x2: "6.01", y2: "18" })),
    monitor: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        React.createElement("rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", ry: "2" }),
        React.createElement("line", { x1: "8", y1: "21", x2: "16", y2: "21" }),
        React.createElement("line", { x1: "12", y1: "17", x2: "12", y2: "21" })),
    tv: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        React.createElement("rect", { x: "2", y: "7", width: "20", height: "15", rx: "2", ry: "2" }),
        React.createElement("polyline", { points: "17 2 12 7 7 2" })),
    users: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        React.createElement("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
        React.createElement("circle", { cx: "9", cy: "7", r: "4" }),
        React.createElement("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
        React.createElement("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })),
    key: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        React.createElement("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" })),
    alert: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
        React.createElement("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
        React.createElement("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })),
    lock: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        React.createElement("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
        React.createElement("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }))
};
const normalizeDataImage = (value) => {
    if (!value)
        return "";
    const v = String(value).trim();
    if (!v)
        return "";
    if (v.startsWith("data:image/"))
        return v;
    return "data:image/png;base64," + v.replace(/^base64,?/i, "");
};
const getClientLogoSrc = (projectOrData) => {
    const meta = (projectOrData && projectOrData.meta) || {};
    const url = String(meta.clientLogoUrl || meta.clientLogo || meta.logo || '').trim();
    if (url) return url;
    return normalizeDataImage(meta.clientLogoData || '');
};
const getClientInitials = (projectOrData) => {
    const client = getProjectClient(projectOrData) || ((projectOrData && projectOrData.meta && projectOrData.meta.cliente) || '');
    const clean = String(client || 'Cliente').trim();
    const words = clean.split(/\s+/).filter(Boolean);
    return (words.length > 1 ? `${words[0][0]}${words[1][0]}` : clean.slice(0, 2)).toUpperCase();
};
const IconOptions = [
    { id: 'wifi', label: 'Wifi' }, { id: 'server', label: 'Server' },
    { id: 'monitor', label: 'Monitor' }, { id: 'tv', label: 'TV' },
    { id: 'users', label: 'Usuarios' }, { id: 'key', label: 'Llave' },
    { id: 'alert', label: 'Alerta' }, { id: 'lock', label: 'Candado' }
];
// --- HELPERS: ESTADOS Y DEPENDENCIAS (SIN ESTADO PRÓXIMO) ---
const normalizeEstado = (estado) => {
    const raw = (estado ?? '').toString().trim();
    if (!raw) return 'Pendiente';
    // Compatibilidad: estado antiguo "Próximo" -> "Pendiente"
    if (raw === 'Próximo' || raw === 'Proximo') return 'Pendiente';
    // Normaliza variantes
    if (raw.toLowerCase() === 'en curso' || raw.toLowerCase() === 'en-curso') return 'En Curso';
    if (raw.toLowerCase() === 'completado') return 'Completado';
    if (raw.toLowerCase() === 'pendiente') return 'Pendiente';
    return raw;
};
// Normaliza el estado del PROYECTO (meta.estado) para evitar problemas por mayúsculas/minúsculas, tildes, etc.
const normalizeProjectEstado = (estado) => {
    const raw = (estado !== null && estado !== void 0 ? estado : 'En Ejecución').toString().trim();
    if (!raw)
        return 'En Ejecución';
    const low = raw.toLowerCase();
    if (low === 'en ejecucion' || low === 'en ejecución')
        return 'En Ejecución';
    if (low === 'completado')
        return 'Completado';
    if (low === 'en pausa')
        return 'En Pausa';
    if (low === 'en revision' || low === 'en revisión')
        return 'En Revisión';
    return raw;
};
const buildTaskIndex = (tasks) => {
    const idx = new Map();
    tasks.forEach(t => {
        if (t && t.id !== null && t.id !== undefined)
            idx.set(String(t.id), t);
    });
    return idx;
};
const isTaskBlocked = (task, taskIndex) => {
    const depId = task.dependsOn;
    if (!depId)
        return false;
    const dep = taskIndex.get(String(depId));
    if (!dep)
        return false; // si no existe, no bloqueamos
    return normalizeEstado(dep.estado) !== 'Completado';
};
const effectiveEstado = (task, taskIndex) => {
    const blocked = isTaskBlocked(task, taskIndex);
    const estado = normalizeEstado(task.estado);
    if (blocked && estado !== 'Completado')
        return 'Pendiente';
    return estado;
};
const computeProjectStats = (tasks) => {
    const idx = buildTaskIndex(tasks);
    const total = tasks.length || 0;

    let completed = 0, inProgress = 0, pending = 0;

    // Nuevo: progreso acumulado (0..total), contando subtareas done
    let progressSum = 0;

    tasks.forEach(t => {
        const e = effectiveEstado(t, idx);

        // Contadores por estado (para OK / En curso / Pend.)
        if (e === 'Completado') completed++;
        else if (e === 'En Curso') inProgress++;
        else pending++;

        // Progreso:
        // 1) Si tarea completada => 100%
        if (e === 'Completado') {
            progressSum += 1;
            return;
        }

        // 2) Si hay subtareas => done/total subtareas
        const subs = Array.isArray(t.subtasks) ? t.subtasks : [];
        if (subs.length > 0) {
            const done = subs.filter(s => !!s.done).length;
            progressSum += (done / subs.length);
            return;
        }

        // 3) Si no hay subtareas => 0%
        progressSum += 0;
    });

    const progress = total > 0 ? Math.round((progressSum / total) * 100) : 0;
    return { total, completed, inProgress, pending, progress, progressSum };
};

const parseDateOnly = (iso) => {
    if (!iso) return null;
    const t = String(iso).trim();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) return null;
    const [y, m, d] = t.split('-').map(n => parseInt(n, 10));
    if (!y || !m || !d) return null;
    return new Date(y, m - 1, d);
};

const splitAssignees = (value) => {
    const raw = String(value || '').trim();
    if (!raw) return ['Sin asignar'];
    const parts = raw.split(/[\/,;&]|\s+y\s+/).map(s => s.trim()).filter(Boolean);
    return parts.length ? parts : ['Sin asignar'];
};

const computeExecutiveMetrics = (projects) => {
    const list = Array.isArray(projects) ? projects : [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const soon = new Date(today);
    soon.setDate(today.getDate() + 14);

    const statusCounts = { active: 0, review: 0, completed: 0, paused: 0 };
    let tasksTotal = 0;
    let tasksOpen = 0;
    let tasksCompleted = 0;
    let progressSumAll = 0;
    let blockedTasks = 0;
    let urgentTasks = 0;
    let criticalTasks = 0;
    let overdueTasks = 0;
    const overdueProjectIds = new Set();
    const workloadMap = {};
    const deadlines = [];
    const incidents = [];

    list.forEach(p => {
        const meta = (p && p.meta) || {};
        const estadoProyecto = normalizeProjectEstado(meta.estado);
        if (estadoProyecto === 'En Ejecución') statusCounts.active += 1;
        else if (estadoProyecto === 'En Revisión') statusCounts.review += 1;
        else if (estadoProyecto === 'Completado') statusCounts.completed += 1;
        else if (estadoProyecto === 'En Pausa') statusCounts.paused += 1;

        if (estadoProyecto === 'Completado') return;

        const tasks = Array.isArray(p && p.tasks) ? p.tasks : [];
        const stats = computeProjectStats(tasks);
        const taskIndex = buildTaskIndex(tasks);
        const projectTitle = meta.titulo || 'Proyecto sin título';

        tasksTotal += stats.total || 0;
        tasksCompleted += stats.completed || 0;
        tasksOpen += (stats.pending || 0) + (stats.inProgress || 0);
        progressSumAll += stats.progressSum || 0;

        tasks.forEach(t => {
            const effective = effectiveEstado(t, taskIndex);
            const isOpen = effective !== 'Completado';
            if (!isOpen) return;

            splitAssignees(t.asignadoA).forEach(name => {
                workloadMap[name] = (workloadMap[name] || 0) + 1;
            });

            const priority = String(t.prioridad || '').toLowerCase();
            const title = t.tarea || 'Tarea sin título';
            const due = parseDateOnly(t.fechaLimite);
            const blocked = isTaskBlocked(t, taskIndex);
            const urgent = priority.includes('urgente');
            const critical = priority.includes('crítica') || priority.includes('critica') || priority.includes('critical');
            const overdue = due && due < today;

            if (blocked) blockedTasks += 1;
            if (urgent) urgentTasks += 1;
            if (critical) criticalTasks += 1;
            if (overdue) {
                overdueTasks += 1;
                overdueProjectIds.add(String(p.id || projectTitle));
            }

            if (due && due <= soon) {
                const daysLeft = Math.ceil((due.getTime() - today.getTime()) / 86400000);
                deadlines.push({
                    project: projectTitle,
                    task: title,
                    date: t.fechaLimite,
                    owner: t.asignadoA || meta.responsableProyecto || 'Sin asignar',
                    status: overdue ? 'Vencida' : daysLeft <= 3 ? 'Cercana' : 'Planificada',
                    tone: overdue ? 'critical' : daysLeft <= 3 ? 'warning' : 'normal'
                });
            }

            if (blocked || urgent || critical || overdue) {
                incidents.push({
                    project: projectTitle,
                    task: title,
                    reason: blocked ? 'Bloqueada' : overdue ? 'Vencida' : critical ? 'Crítica' : 'Urgente',
                    tone: blocked || overdue || critical ? 'critical' : 'warning'
                });
            }
        });
    });

    const activeProjects = statusCounts.active + statusCounts.review + statusCounts.paused;
    const avgProgress = tasksTotal > 0 ? Math.round((progressSumAll / tasksTotal) * 100) : 0;
    const totalIncidents = blockedTasks + urgentTasks + criticalTasks + overdueTasks;
    const health = (() => {
        if (overdueTasks > 2 || blockedTasks > 3 || criticalTasks > 0 || (tasksTotal > 0 && avgProgress < 35)) {
            return { label: 'Crítico', className: 'critical', icon: 'fa-triangle-exclamation', text: 'Hay bloqueos, vencimientos o tareas críticas que conviene revisar hoy.' };
        }
        if (overdueTasks > 0 || blockedTasks > 0 || urgentTasks > 0 || (tasksTotal > 0 && avgProgress < 55)) {
            return { label: 'Atención', className: 'warning', icon: 'fa-circle-exclamation', text: 'La cartera avanza, pero hay señales que requieren seguimiento.' };
        }
        return { label: 'Bien', className: 'good', icon: 'fa-circle-check', text: 'La cartera está estable y sin incidencias relevantes.' };
    })();
    const workload = Object.entries(workloadMap)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 6);
    const maxWorkload = Math.max(1, ...workload.map(x => x.count));
    const workloadWithState = workload.map(item => {
        const pct = Math.round((item.count / maxWorkload) * 100);
        const state = pct >= 90 && item.count >= 3 ? 'Alta carga' : (pct >= 55 || item.count >= 2) ? 'Carga media' : 'Disponible';
        const tone = pct >= 90 && item.count >= 3 ? 'high' : (pct >= 55 || item.count >= 2) ? 'medium' : 'low';
        return { ...item, pct, state, tone };
    });
    const highLoadPeople = workloadWithState.filter(item => item.tone === 'high');
    const recommendations = (() => {
        const items = [];
        if (statusCounts.review > 0) {
            items.push({ icon: 'fa-magnifying-glass', title: 'Revisar proyectos en revisión', text: `${statusCounts.review} proyecto${statusCounts.review === 1 ? '' : 's'} esperando validación.`, tone: 'info', action: ['list', 'En Revisión'] });
        }
        if (totalIncidents > 0) {
            items.push({ icon: 'fa-shield-halved', title: 'Atender incidencias abiertas', text: `${totalIncidents} señal${totalIncidents === 1 ? '' : 'es'} requieren seguimiento.`, tone: 'critical', action: ['alerts', null] });
        }
        if (overdueTasks > 0) {
            items.push({ icon: 'fa-calendar-xmark', title: 'Revisar vencimientos superados', text: `${overdueTasks} tarea${overdueTasks === 1 ? '' : 's'} fuera de plazo.`, tone: 'warning', action: ['alerts', null] });
        }
        if (highLoadPeople.length > 0) {
            items.push({ icon: 'fa-people-arrows', title: 'Redistribuir carga del equipo', text: `Carga concentrada en ${highLoadPeople[0].name}. Valorar redistribución.`, tone: 'warning', action: ['workload', null] });
        }
        if (!items.length) {
            items.push({ icon: 'fa-circle-check', title: 'Planificación inmediata despejada', text: 'No hay vencimientos críticos ni incidencias urgentes en cartera.', tone: 'good', action: ['list', null] });
        }
        return items.slice(0, 4);
    })();

    return {
        statusCounts,
        activeProjects,
        avgProgress,
        tasksTotal,
        tasksOpen,
        tasksCompleted,
        blockedTasks,
        urgentTasks,
        criticalTasks,
        overdueTasks,
        overdueProjects: overdueProjectIds.size,
        totalIncidents,
        health,
        workload: workloadWithState,
        maxWorkload,
        highLoadPeople,
        recommendations,
        deadlines: deadlines.sort((a, b) => (parseDateOnly(a.date) || 0) - (parseDateOnly(b.date) || 0)).slice(0, 5),
        incidents: incidents.slice(0, 5)
    };
};

const EmptyMiniState = ({ icon, title, text }) => (
    <div className="home-empty">
        <i className={`fas ${icon || 'fa-circle-info'}`} aria-hidden="true"></i>
        <div>
            <strong>{title}</strong>
            <span>{text}</span>
        </div>
    </div>
);

const HomeView = ({ projects, onCreate, onNavigate }) => {
    const metrics = React.useMemo(() => computeExecutiveMetrics(projects), [projects]);
    const highLoadLabel = metrics.highLoadPeople.length > 0 ? `${metrics.highLoadPeople.length} persona${metrics.highLoadPeople.length === 1 ? '' : 's'} al 100%` : 'Carga equilibrada';
    const kpis = [
        { label: 'Proyectos activos', value: metrics.activeProjects, note: `Ejecución ${metrics.statusCounts.active} · Revisión ${metrics.statusCounts.review} · Pausa ${metrics.statusCounts.paused}`, icon: 'fa-layer-group', tone: 'blue' },
        { label: 'Avance medio', value: `${metrics.avgProgress}%`, note: 'Calculado sobre tareas abiertas y completadas', icon: 'fa-chart-line', tone: 'green', progress: metrics.avgProgress },
        { label: 'Tareas abiertas', value: metrics.tasksOpen, note: `${metrics.tasksTotal} tareas totales`, icon: 'fa-list-check', tone: 'amber' },
        { label: 'Incidencias', value: metrics.totalIncidents, note: `${metrics.blockedTasks} bloqueadas · ${metrics.urgentTasks + metrics.criticalTasks} urgentes/críticas`, icon: 'fa-shield-halved', tone: 'red' },
        { label: 'Próximos vencimientos', value: metrics.deadlines.length, note: 'En los próximos 14 días', icon: 'fa-calendar-day', tone: 'cyan' }
    ];

    return (
        <div className="home-dashboard">
            <section className="home-hero">
                <div className="home-hero-brand">
                    <div className="home-logo-wrap"><img src={UNITECNIC_LOGO_BASE64} alt="Unitecnic" /></div>
                    <div>
                        <h1>Resumen ejecutivo</h1>
                        <p>Vista global de proyectos, carga de trabajo e incidencias.</p>
                    </div>
                </div>
                <div className="home-hero-actions no-print">
                    <button className="home-action primary" onClick={onCreate}><i className="fas fa-plus"></i><span>Nuevo proyecto</span></button>
                    <button className="home-action" onClick={() => onNavigate('list', null)}><i className="fas fa-layer-group"></i><span>Ver proyectos</span></button>
                </div>
            </section>

            <section className="home-kpi-grid">
                {kpis.map(kpi => (
                    <article className={`home-kpi home-kpi--${kpi.tone}`} key={kpi.label}>
                        <div className="home-kpi-top">
                            <span>{kpi.label}</span>
                            <i className={`fas ${kpi.icon}`}></i>
                        </div>
                        <strong>{kpi.value}</strong>
                        <p>{kpi.note}</p>
                        {kpi.progress != null && <div className="home-progress"><span style={{ width: `${Math.max(0, Math.min(100, kpi.progress))}%` }}></span></div>}
                    </article>
                ))}
            </section>

            <section className={`home-health home-health--${metrics.health.className}`}>
                <div className="home-health-score">
                    <i className={`fas ${metrics.health.icon}`}></i>
                    <div>
                        <span>Salud general</span>
                        <strong>{metrics.health.label === 'Bien' ? 'Correcto' : metrics.health.label === 'Atención' ? 'Atención requerida' : 'Crítico'}</strong>
                    </div>
                </div>
                <p>{metrics.health.text}</p>
                <div className="home-health-metrics">
                    <span>{metrics.overdueProjects} vencido{metrics.overdueProjects === 1 ? '' : 's'}</span>
                    <span>{metrics.totalIncidents} incidencia{metrics.totalIncidents === 1 ? '' : 's'}</span>
                    <span>{metrics.avgProgress}% avance</span>
                    <span>{highLoadLabel}</span>
                </div>
            </section>

            <section className="home-content-grid">
                <article className="home-panel home-panel--deadlines">
                    <div className="home-panel-head">
                        <div><span>Agenda</span><h2>Próximos vencimientos</h2></div>
                        <i className="fas fa-calendar-check"></i>
                    </div>
                    {metrics.deadlines.length ? (
                        <div className="home-list">
                            {metrics.deadlines.map((item, idx) => (
                                <button className={`home-list-row home-list-row--${item.tone}`} key={`${item.project}-${item.task}-${idx}`} onClick={() => onNavigate('alerts', null)}>
                                    <div><strong>{item.task}</strong><span>{item.project} · {item.owner}</span></div>
                                    <div className="home-deadline-meta">
                                        <span>{item.status}</span>
                                        <time>{window.formatFechaES ? window.formatFechaES(item.date) : item.date}</time>
                                    </div>
                                </button>
                            ))}
                        </div>
                    ) : <EmptyMiniState icon="fa-calendar-plus" title="Sin vencimientos próximos" text="No hay vencimientos en los próximos 14 días. La planificación inmediata está despejada." />}
                </article>

                <article className="home-panel home-panel--workload">
                    <div className="home-panel-head">
                        <div><span>Equipo</span><h2>Carga por persona</h2></div>
                        <i className="fas fa-users"></i>
                    </div>
                    {metrics.workload.length ? (
                        <div className="home-workload-list">
                            {metrics.workload.map(item => {
                                return (
                                    <div className={`home-workload-row home-workload-row--${item.tone}`} key={item.name}>
                                        <div><strong>{item.name}</strong><span>{item.pct}%</span></div>
                                        <div className="home-workload-bar"><span style={{ width: `${item.pct}%` }}></span></div>
                                        <small>{item.count} tareas abiertas · {item.state}</small>
                                    </div>
                                );
                            })}
                        </div>
                    ) : <EmptyMiniState icon="fa-user-check" title="Sin carga asignada" text="Cuando existan tareas abiertas aparecerán aquí." />}
                </article>

                <article className="home-panel home-panel--incidents">
                    <div className="home-panel-head">
                        <div><span>Control</span><h2>Incidencias relevantes</h2></div>
                        <i className="fas fa-shield-halved"></i>
                    </div>
                    {metrics.incidents.length ? (
                        <div className="home-incident-list">
                            {metrics.incidents.map((item, idx) => (
                                <button className={`home-incident home-incident--${item.tone}`} key={`${item.project}-${item.task}-${idx}`} onClick={() => onNavigate('alerts', null)}>
                                    <span>{item.reason}</span>
                                    <div><strong>{item.task}</strong><small>{item.project}</small></div>
                                </button>
                            ))}
                        </div>
                    ) : <EmptyMiniState icon="fa-shield-heart" title="Sin incidencias relevantes" text="No hay tareas críticas, urgentes, bloqueadas o vencidas." />}
                </article>

                <article className="home-panel home-panel--recommendations">
                    <div className="home-panel-head">
                        <div><span>Decisión</span><h2>Acciones recomendadas</h2></div>
                        <i className="fas fa-bolt"></i>
                    </div>
                    <div className="home-recommendation-list">
                        {metrics.recommendations.map((item, idx) => (
                            <button className={`home-recommendation home-recommendation--${item.tone}`} key={`${item.title}-${idx}`} onClick={() => onNavigate(item.action[0], item.action[1])}>
                                <i className={`fas ${item.icon}`}></i>
                                <div><strong>{item.title}</strong><span>{item.text}</span></div>
                            </button>
                        ))}
                    </div>
                </article>
            </section>
        </div>
    );
};

const IconPicker = ({ value, onChange, open, onToggle }) => (React.createElement("div", { className: "relative", onClick: (e) => e.stopPropagation() },
    React.createElement("button", { type: "button", onClick: onToggle, className: "w-10 h-10 rounded-xl border border-[color:var(--border)] bg-white/80 hover:bg-white flex items-center justify-center text-[color:var(--brand-dark)] shadow-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]", title: "Cambiar icono" }, Icons[value] || Icons.monitor),
    open && (React.createElement("div", { className: "absolute z-50 mt-2 w-56 rounded-2xl border border-[color:var(--border)] bg-white shadow-2xl p-2" },
        React.createElement("div", { className: "grid grid-cols-4 gap-2" }, IconOptions.map(opt => (React.createElement("button", { key: opt.id, type: "button", onClick: () => onChange(opt.id), className: `h-11 rounded-xl border flex items-center justify-center transition-colors ${opt.id === value
                ? "border-[color:rgba(8,136,200,0.35)] bg-[color:rgba(8,136,200,0.10)] text-[color:var(--brand-dark)]"
                : "border-slate-100 hover:border-[color:rgba(8,136,200,0.25)] hover:bg-[color:rgba(8,136,200,0.06)] text-slate-700"}`, title: opt.label }, Icons[opt.id] || Icons.monitor)))),
        React.createElement("div", { className: "mt-2 text-[11px] text-slate-500 px-1" }, "Selecciona un icono")))));
// --- COMPONENTE: TARJETA DE PROYECTO ---
// --- AUDITORÍA (actividad embebida en cada proyecto; sin coste AWS) ---
const getUserLabel = () => {
    try {
        const s = JSON.parse(localStorage.getItem('unitecnic_auth_session') || 'null');
        const c = (s && s.claims) ? s.claims : {};
        return (c.email || c['cognito:username'] || c.preferred_username || c.username || c.sub || 'Usuario');
    } catch (e) {
        return 'Usuario';
    }
};

const ensureAudit = (p) => {
    const audit = (p && p.audit && typeof p.audit === 'object') ? p.audit : {};
    const comments = Array.isArray(audit.comments) ? audit.comments : [];
    const activity = Array.isArray(audit.activity) ? audit.activity : [];
    return { audit, comments, activity };
};

const addActivityToProject = (project, message, type = 'project') => {
    const { audit, comments, activity } = ensureAudit(project);
    const entry = {
        id: 'e_' + Date.now() + '_' + Math.random().toString(16).slice(2),
        ts: Date.now(),
        user: getUserLabel(),
        type,
        message
    };
    // Limitamos a 200 entradas para no crecer infinito
    const nextActivity = [...activity, entry].slice(-200);
    return { ...project, audit: { ...audit, comments, activity: nextActivity } };
};

const ProjectCard = ({ p, onSelect, onDelete, dnd }) => {
    var _a;
    const { onDragStart, onDragEnd, onDragOver, onDrop, isDragging, isDragOver, blockClickRef } = dnd || {};
    const stats = computeProjectStats(p.tasks || []);
    const projectEstado = normalizeProjectEstado((_a = p === null || p === void 0 ? void 0 : p.meta) === null || _a === void 0 ? void 0 : _a.estado);
    const total = stats.total || 1;
    const w = (n) => `${Math.max(0, Math.round((n / total) * 100))}%`;
    return (React.createElement("div", { "data-estado": projectEstado, draggable: !!onDragStart, onDragStart: (e) => { e.stopPropagation(); onDragStart && onDragStart(e, p); }, onDragEnd: (e) => { e.stopPropagation(); onDragEnd && onDragEnd(e); }, onDragOver: (e) => { onDragOver && onDragOver(e, p); }, onDrop: (e) => { onDrop && onDrop(e, p); }, className: `project-card bg-white rounded-xl shadow-sm border border-gray-200 p-6 card-hover transition-all cursor-pointer group relative flex flex-col justify-between ${isDragging ? 'opacity-60' : ''} ${isDragOver ? 'ring-2 ring-[color:rgba(8,136,200,0.35)]' : ''}`, onClick: () => { if (blockClickRef && blockClickRef.current)
            return; onSelect(p); } },
        React.createElement("div", null,
            React.createElement("div", { className: "flex justify-between items-start" },
                React.createElement("div", { className: `h-12 w-12 rounded-lg flex items-center justify-center shrink-0 ${projectEstado === 'Completado' ? 'bg-emerald-100 text-emerald-700'
                        : projectEstado === 'En Pausa' ? 'bg-slate-100 text-slate-700'
                            : projectEstado === 'En Revisión' ? 'bg-violet-100 text-violet-700'
                                : 'bg-[color:rgba(8,136,200,0.12)] text-[color:var(--brand-dark)]'} overflow-hidden` }, p.meta.clientLogoData ? (React.createElement("img", { src: p.meta.clientLogoData, alt: "Logo cliente", className: "w-full h-full object-contain p-1" })) : (React.createElement("i", { className: `fas ${projectEstado === 'Completado' ? 'fa-check-circle' : projectEstado === 'En Pausa' ? 'fa-pause-circle' : projectEstado === 'En Revisión' ? 'fa-search' : 'fa-project-diagram'}` }))),
                React.createElement("button", { onClick: (e) => { e.stopPropagation(); onDelete(p.id); }, className: "text-gray-300 hover:text-red-500 p-2 transition-colors opacity-0 group-hover:opacity-100", title: "Eliminar proyecto" },
                    React.createElement("i", { className: "fas fa-trash" }))),
            React.createElement("h3", { className: "font-bold text-lg text-gray-800 mb-1 truncate" }, p.meta.titulo || "Sin Título"),
            React.createElement("p", { className: "text-sm text-gray-500 truncate" }, p.meta.subtitulo || "Sin descripción"),
            p.meta.cliente && (React.createElement("div", { className: "mt-2" },
                React.createElement("span", { className: "apple-chip apple-chip--muted apple-chip--small" },
                    React.createElement("i", { className: "fas fa-building text-[10px]" }),
                    p.meta.cliente))),
            // SECCIÓN DE METADATOS (Responsable y PEP con etiquetas claras)
            (p.meta.responsableProyecto || p.meta.pep) && (React.createElement("div", { className: "mt-3 flex flex-wrap gap-2" },
                p.meta.responsableProyecto && (React.createElement("span", { className: "apple-chip apple-chip--muted" },
                    React.createElement("i", { className: "fas fa-user-gear text-[10px]" }),
                    React.createElement("span", { className: "font-semibold mr-1" }, "Resp:"),
                    p.meta.responsableProyecto)),
                    p.meta.ejecutorProyecto && (React.createElement("span", { className: "apple-chip apple-chip--muted" },
    React.createElement("i", { className: "fas fa-hard-hat text-[10px]" }),
    React.createElement("span", { className: "font-semibold mr-1" }, "Ejec:"),
    p.meta.ejecutorProyecto)),
                p.meta.pep && (React.createElement("span", { className: "apple-chip apple-chip--muted internal-only" },
                    React.createElement("i", { className: "fas fa-hashtag text-[10px]" }),
                    React.createElement("span", { className: "font-semibold mr-1" }, "PEP:"),
                    p.meta.pep)))),

            // SECCIÓN DE DOCUMENTACIÓN (Botón independiente para evitar amontonamiento)
            p.meta.sharepointUrl && (React.createElement("div", { className: "mt-3" },
                React.createElement("a", {
                    href: p.meta.sharepointUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: (e) => e.stopPropagation(),
                    className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 text-[11px] font-bold hover:bg-blue-100 transition-colors"
                },
                    React.createElement("i", { className: "fas fa-folder-open" }),
                    "Documentación SharePoint"
                ))),

            React.createElement("div", { className: "mt-5 space-y-2" },
                React.createElement("div", { className: "flex items-center justify-between text-xs text-gray-500" },
                    React.createElement("span", { className: "font-semibold text-[color:var(--brand-dark)]" },
                        stats.progress,
                        "%"),
                    React.createElement("span", null,
                        stats.total,
                        " tareas")),
                React.createElement("div", { className: "w-full h-2 rounded-full bg-gray-100 overflow-hidden flex" },
                    React.createElement("div", { className: "h-full bg-emerald-500", style: { width: w(stats.completed) } }),
                    React.createElement("div", { className: "h-full bg-amber-500", style: { width: w(stats.inProgress) } }),
                    React.createElement("div", { className: "h-full bg-rose-500", style: { width: w(stats.pending) } })),
                React.createElement("div", { className: "flex flex-wrap gap-2 text-[11px] text-gray-500" },
                    React.createElement("span", { className: "inline-flex items-center gap-1" },
                        React.createElement("span", { className: "h-2 w-2 rounded-full bg-emerald-500" }),
                        "OK ",
                        stats.completed),
                    React.createElement("span", { className: "inline-flex items-center gap-1" },
                        React.createElement("span", { className: "h-2 w-2 rounded-full bg-amber-500" }),
                        "En curso ",
                        stats.inProgress),
                    React.createElement("span", { className: "inline-flex items-center gap-1" },
                        React.createElement("span", { className: "h-2 w-2 rounded-full bg-rose-500" }),
                        "Pend. ",
                        stats.pending)))),
        React.createElement("div", { className: "mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500" },
            React.createElement("span", { className: "apple-chip apple-chip--small" },
                p.tasks.length,
                " Tareas"),
            React.createElement("span", { className: "apple-link" },
                "Abrir ",
                React.createElement("i", { className: "fas fa-arrow-right" })))));
};

// --- COMPONENTE: DASHBOARD (PROJECT LIST) ---
const ProjectList = ({ projects, onCreate, onSelect, onDelete, onMoveProject, onBackup, onExportCSV, onImport, theme, onToggleTheme, storagePercent, statusFilter }) => {
    const normClient = (p) => ((p.meta && p.meta.cliente) ? p.meta.cliente : 'Sin cliente').trim() || 'Sin cliente';
    const clients = Array.from(new Set(projects.map(normClient))).sort((a, b) => a.localeCompare(b, 'es'));
    const [clientFilter, setClientFilter] = useState('Todos');
    const [searchTerm, setSearchTerm] = useState('');

    // --- DRAG & DROP ---
    const [draggingProjectId, setDraggingProjectId] = useState(null);
    const [dragOverProjectId, setDragOverProjectId] = useState(null);
    const blockClickRef = React.useRef(false);

    // --- MENÚ DE ACCIONES ---
    const [actionsOpen, setActionsOpen] = useState(false);
    const actionsRef = React.useRef(null);

    useEffect(() => {
        if (!actionsOpen) return;
        const onDocMouseDown = (e) => {
            if (actionsRef.current && !actionsRef.current.contains(e.target)) setActionsOpen(false);
        };
        const onKey = (e) => { if (e.key === 'Escape') setActionsOpen(false); };
        document.addEventListener('mousedown', onDocMouseDown);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('mousedown', onDocMouseDown);
            document.removeEventListener('keydown', onKey);
        };
    }, [actionsOpen]);

    const cleanupProjectDnd = () => {
        setDraggingProjectId(null);
        setDragOverProjectId(null);
        setTimeout(() => { blockClickRef.current = false; }, 0);
    };
    const readDraggedProjectId = (e) => {
        try { return e.dataTransfer.getData('application/x-unitecnic-project') || e.dataTransfer.getData('text/plain'); }
        catch (err) { return ''; }
    };
    const handleProjectDragStart = (e, project) => {
        try {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('application/x-unitecnic-project', String(project.id));
            e.dataTransfer.setData('text/plain', String(project.id));
        } catch (err) { }
        blockClickRef.current = true;
        setDraggingProjectId(project.id);
    };
    const handleProjectDragEnd = () => {
        cleanupProjectDnd();
        setTimeout(() => { blockClickRef.current = false; }, 200);
    };
    const handleProjectCardDragOver = (e, targetProject) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        setDragOverProjectId(targetProject.id);
    };
    const handleProjectCardDrop = (e, targetProject) => {
        e.preventDefault();
        const draggedId = readDraggedProjectId(e);
        if (!draggedId || !onMoveProject) return;
        const targetEstado = normalizeProjectEstado(targetProject?.meta?.estado);
        onMoveProject(draggedId, targetEstado, targetProject.id);
        setDragOverProjectId(null);
        cleanupProjectDnd();
    };
    const handleSectionDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };
    const handleSectionDrop = (e, targetEstado) => {
        e.preventDefault();
        const draggedId = readDraggedProjectId(e);
        if (!draggedId || !onMoveProject) return;
        onMoveProject(draggedId, targetEstado, null);
        setDragOverProjectId(null);
        cleanupProjectDnd();
    };

    const filteredProjects = projects.filter(p => {
        const matchesClient = clientFilter === 'Todos' || normClient(p) === clientFilter;
        const q = (searchTerm || '').toString().trim().toLowerCase();
        if (!q) return matchesClient;
        const m = (p && p.meta) ? p.meta : {};
        const hay = ((m.titulo || '') + ' ' + (m.subtitulo || '') + ' ' + (m.cliente || '') + ' ' + (m.pep || '')).toLowerCase();
        return matchesClient && hay.includes(q);
    });

    const activeProjects = filteredProjects.filter(p => normalizeProjectEstado(p?.meta?.estado) === 'En Ejecución');
    const pausedProjects = filteredProjects.filter(p => normalizeProjectEstado(p?.meta?.estado) === 'En Pausa');
    const reviewProjects = filteredProjects.filter(p => normalizeProjectEstado(p?.meta?.estado) === 'En Revisión');
    const completedProjects = filteredProjects.filter(p => normalizeProjectEstado(p?.meta?.estado) === 'Completado');
    const nonCompletedProjects = filteredProjects.filter(p => normalizeProjectEstado(p?.meta?.estado) !== 'Completado');

    // Visibilidad de secciones según filtro de sidebar
    const showAllSections = !statusFilter;
    const showSectionActive    = showAllSections || statusFilter === 'En Ejecución';
    const showSectionPaused    = showAllSections || statusFilter === 'En Pausa';
    const showSectionReview    = showAllSections || statusFilter === 'En Revisión';
    const showSectionCompleted = showAllSections || statusFilter === 'Completado';

    // --- CÁLCULO RESUMEN EJECUTIVO ---
    const executiveSummary = (() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const nextWeek = new Date(today);
        nextWeek.setDate(today.getDate() + 7);

        const parseISO = (iso) => {
            if (!iso) return null;
            const t = String(iso).trim();
            if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) return null;
            const [y, m, d] = t.split('-').map(n => parseInt(n, 10));
            return new Date(y, (m || 1) - 1, d || 1);
        };

        const hasOverdueOpenTask = (p) => {
            const tasks = (p?.tasks) || [];
            if (!tasks.length) return false;
            const idx = buildTaskIndex(tasks);
            return tasks.some(t => {
                const lim = parseISO(t?.fechaLimite);
                if (!lim) return false;
                const e = effectiveEstado(t, idx);
                return e !== 'Completado' && lim < today;
            });
        };

        const hasTooManyPending = (stats) => {
            if (!stats || (stats.total || 0) < 5) return false;
            const fracPending = (stats.pending || 0) / Math.max(1, stats.total || 0);
            return fracPending >= 0.60 && (stats.progress || 0) < 50;
        };

        let tasksTotal = 0;
        let tasksOpen = 0;
        let tasksCompleted = 0;
        let progressSumAll = 0;
        let redProjects = 0;
        let blockedProjects = 0;
        let urgentTasks = 0;
        let blockedTasks = 0;
        const redProjectDetails = [];
        const blockedProjectDetails = [];
        const workloadMap = {};
        const upcomingDeadlines = [];

        nonCompletedProjects.forEach(p => {
            const tasks = p.tasks || [];
            const stats = computeProjectStats(tasks);
            progressSumAll += (stats.progressSum || 0);
            const pid = String(p.id || '');
            const title = (p.meta?.titulo) || 'Proyecto';
            const resp = (p.meta && p.meta.responsableProyecto) ? String(p.meta.responsableProyecto) : 'Sin asignar';

            tasksTotal += stats.total || 0;
            tasksOpen += (stats.pending || 0) + (stats.inProgress || 0);
            tasksCompleted += stats.completed || 0;

            const idx = buildTaskIndex(tasks);
           tasks.forEach(t => {
                const est = effectiveEstado(t, idx);
                // Urgentes: prioridad = "Urgente" y NO completadas
if (est !== 'Completado' && String(t?.prioridad || '').toLowerCase() === 'urgente') {
  urgentTasks += 1;
}
                // Carga de trabajo por persona (ASIGNADO A): cuenta tareas abiertas (Pendiente/En curso).
                if (est !== 'Completado') {
                    // LÓGICA DE SEPARACIÓN DE NOMBRES
                    let raw = (t.asignadoA || '').trim();
                    if (!raw) raw = "Sin asignar";

                    // Separamos por /, ;, & o " y "
                    const names = raw.split(/[\/,;&]|\s+y\s+/).map(s => s.trim()).filter(Boolean);
                    const finalNames = names.length > 0 ? names : ["Sin asignar"];

                    // Sumamos +1 a cada persona
                    finalNames.forEach(name => {
                        workloadMap[name] = (workloadMap[name] || 0) + 1;
                    });
                }
                const lim = parseISO(t.fechaLimite);
                if (est !== 'Completado' && lim && lim >= today && lim <= nextWeek) {
                    upcomingDeadlines.push({ tarea: t.tarea, proyecto: title, fecha: t.fechaLimite, responsable: resp });
                }
            });

            if (tasks.length) {
                const blockedCount = tasks.filter(t => normalizeEstado(t.estado) !== 'Completado' && isTaskBlocked(t, idx)).length;
                if (blockedCount > 0) {
                    blockedProjects += 1;
                    blockedTasks += blockedCount;
                    blockedProjectDetails.push({ id: pid, title, blockedCount });
                }
            }

            const overdue = hasOverdueOpenTask(p);
            const tooMany = hasTooManyPending(stats);
            if (overdue || tooMany) {
                redProjects += 1;
                const reasons = [];
                if (overdue) reasons.push('tareas vencidas');
                if (tooMany) reasons.push('demasiadas pendientes');
                redProjectDetails.push({ id: pid, title, reasons });
            }
        });

        return {
            projectsActive: nonCompletedProjects.length,
            progressAvg: tasksTotal > 0 ? Math.round((progressSumAll / tasksTotal) * 100) : 0,
            tasksTotal,
            tasksOpen,
            redProjects,
            redProjectDetails,
            blockedProjects,
            blockedTasks,
            urgentTasks,
            blockedProjectDetails,
            workloadData: Object.entries(workloadMap).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count).slice(0, 4),
            sortedDeadlines: upcomingDeadlines.sort((a, b) => new Date(a.fecha) - new Date(b.fecha)).slice(0, 3)
        };
    })();

    const projectViewTitle = statusFilter ? `Proyectos · ${statusFilter}` : 'Proyectos';
    const projectViewSubtitle = statusFilter ? 'Listado filtrado por estado' : 'Gestión y seguimiento de proyectos';

    // AQUI ESTÁ LA CLAVE DEL MARGEN: 'max-w-7xl mx-auto'
    return (React.createElement("div", { className: "project-list-view max-w-7xl mx-auto p-6 md:p-10" },
        React.createElement("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4" },
            React.createElement("div", { className: "flex items-start gap-4" },
                React.createElement("div", { className: "w-14 h-14 rounded-2xl bg-white/70 border border-gray-200 shadow-sm flex items-center justify-center overflow-hidden shrink-0" },
                    React.createElement("img", { src: UNITECNIC_LOGO_BASE64, alt: "Unitecnic", className: "w-full h-full object-contain p-2" })),
                React.createElement("div", null,
                    React.createElement("h1", { className: "text-3xl font-bold text-gray-900" }, projectViewTitle),
                    React.createElement("p", { className: "text-gray-500 mt-1 flex items-center gap-2" },
                        React.createElement("i", { className: "fas fa-folder-open text-orange-500" }),
                        " ",
                        projectViewSubtitle),
                    // BUSCADOR CORREGIDO (pl-12 y estructura correcta)
                    React.createElement("div", { className: "mt-4 flex flex-col sm:flex-row sm:items-center gap-3" },
                        React.createElement("div", { className: "relative group" },
                            React.createElement("i", { className: "fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs group-focus-within:text-[color:var(--brand)] transition-colors" }),
                            React.createElement("input", { type: "text", placeholder: "Buscar proyecto...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), onKeyDown: (e) => { if (e.key === 'Escape') setSearchTerm(''); }, className: "apple-search-input pl-12" })
                        ),
                        React.createElement("div", { className: "flex items-center gap-2" },
                            React.createElement("span", { className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-2" }, "Cliente"),
                            React.createElement("select", { className: "apple-select-filter", value: clientFilter, onChange: (e) => setClientFilter(e.target.value) },
                                React.createElement("option", { value: "Todos" }, "Todos"),
                                clients.map(c => React.createElement("option", { key: c, value: c }, c))
                            )
                        )
                    )
                )
            ),
            React.createElement("div", { className: "flex items-center gap-2 no-print" },
                React.createElement("button", { onClick: onCreate, className: "btn-apple-primary no-print", title: "Crear nuevo proyecto" },
                    React.createElement("i", { className: "fas fa-plus" }),
                    "Nuevo"),
                    React.createElement("button", {
  onClick: () => window.location.hash = '#/charts',
  className: "btn-apple no-print",
  title: "Ver gráficos"
},
  React.createElement("i", { className: "fas fa-chart-bar" }),
  "Gráficos"
),
                React.createElement("div", { className: "actions-menu no-print", ref: actionsRef },
                    React.createElement("button", { type: "button", className: "btn-apple-icon", title: "Acciones", "aria-label": "Acciones", onClick: () => setActionsOpen(o => !o) },
                        React.createElement("i", { className: "fas fa-ellipsis" })),
                    actionsOpen && (React.createElement("div", { className: "actions-popover", role: "menu", "aria-label": "Acciones" },
                        React.createElement("button", { type: "button", className: "actions-item", role: "menuitem", onClick: () => { setActionsOpen(false); onBackup(); } },
                            React.createElement("i", { className: "fas fa-file-arrow-down" }),
                            React.createElement("span", null, "Backup (JSON)")),
                        React.createElement("button", { type: "button", className: "actions-item", role: "menuitem", onClick: () => { setActionsOpen(false); onExportCSV && onExportCSV(); } },
                            React.createElement("i", { className: "fas fa-file-csv" }),
                            React.createElement("span", null, "Exportar CSV (Excel)")),
                        React.createElement("button", { type: "button", className: "actions-item", role: "menuitem", onClick: () => { setActionsOpen(false); onImport(); } },
                            React.createElement("i", { className: "fas fa-file-arrow-up" }),
                            React.createElement("span", null, "Importar\u2026")),
                        typeof storagePercent === 'number' && (React.createElement("div", { className: "px-3 pt-3 pb-1 border-t border-gray-100 mt-1" },
                            React.createElement("div", { className: "flex justify-between text-[10px] text-gray-400 mb-1" },
                                React.createElement("span", null, "Almacenamiento local"),
                                React.createElement("span", { className: storagePercent >= 80 ? "text-orange-500 font-bold" : "" }, storagePercent, "%")),
                            React.createElement("div", { className: "w-full h-1.5 rounded-full bg-gray-100 overflow-hidden" },
                                React.createElement("div", { className: `h-full rounded-full transition-all ${storagePercent >= 80 ? 'bg-orange-400' : storagePercent >= 50 ? 'bg-amber-400' : 'bg-emerald-400'}`, style: { width: `${storagePercent}%` } }))))))))),

        filteredProjects.length === 0 ? (React.createElement("div", { className: "text-center py-24 bg-white rounded-2xl border-2 border-dashed border-gray-200" },
            React.createElement("div", { className: "text-gray-300 text-6xl mb-6" },
                React.createElement("i", { className: "fas fa-folder-open" })),
            React.createElement("h3", { className: "text-xl font-semibold text-gray-700" }, "No hay proyectos para mostrar"),
            React.createElement("p", { className: "text-gray-400 mt-2 mb-6" }, statusFilter ? "Este estado todavía no tiene proyectos." : "Ajusta la búsqueda o crea el primer proyecto."),
            React.createElement("button", { onClick: onCreate, className: "text-blue-600 font-medium hover:underline" }, "Crear proyecto"))) : (React.createElement("div", { className: "space-y-12" },
            React.createElement("div", { className: "section-tapiz exec-summary p-6 rounded-2xl border" },
                React.createElement("div", { className: "exec-header" },
                    React.createElement("div", { className: "exec-title" },
                        React.createElement("div", { className: "exec-title-icon", "aria-hidden": "true" },
                            React.createElement("i", { className: "fas fa-gauge-high" })),
                        React.createElement("div", null,
                            React.createElement("div", { className: "exec-title-text" }, "Resumen ejecutivo"),
                            React.createElement("div", { className: "exec-subtitle" }, "Centro de control (seg\u00FAn el filtro de cliente)"))),
                    React.createElement("div", { className: "exec-pill", title: "Se recalcula con los filtros activos" },
                        React.createElement("i", { className: "fas fa-sliders", "aria-hidden": "true" }),
                        React.createElement("span", null, "Seg\u00FAn filtros"))),
                React.createElement("div", { className: "exec-grid" },
                    // 1. PROYECTOS
                    React.createElement("div", { className: "exec-card", onClick: () => setClientFilter('Todos'), title: "Ver todos" },
                        React.createElement("div", { className: "exec-card-top" },
                            React.createElement("div", null,
                                React.createElement("div", { className: "exec-label" }, "Proyectos activos"),
                                React.createElement("div", { className: "exec-value" }, executiveSummary.projectsActive)),
                            React.createElement("div", { className: "exec-card-icon" },
                                React.createElement("i", { className: "fas fa-layer-group" }))),
React.createElement("div", { className: "exec-chips" },
  React.createElement("span", { className: "px-2 py-1 rounded-full border border-[color:rgba(59,130,246,0.3)] text-blue-700 bg-blue-50/50 text-[10px] font-bold" }, "Eje: ", activeProjects.length),
  React.createElement("span", { className: "px-2 py-1 rounded-full border border-[color:rgba(239,68,68,0.3)] text-red-700 bg-red-50/50 text-[10px] font-bold" }, "Pausa: ", pausedProjects.length),
  React.createElement("span", { className: "px-2 py-1 rounded-full border border-[color:rgba(139,92,246,0.3)] text-violet-700 bg-violet-50/50 text-[10px] font-bold" }, "Rev: ", reviewProjects.length)
)
                    ),

                    // 2. AVANCE
                    React.createElement("div", { className: "exec-card" },
                        React.createElement("div", { className: "exec-card-top" },
                            React.createElement("div", null,
                                React.createElement("div", { className: "exec-label" }, "Avance medio"),
                                React.createElement("div", { className: "exec-value" }, executiveSummary.progressAvg, "%"),
                                React.createElement("div", { className: "exec-note" }, "Ponderado por tareas")),
                            React.createElement("div", { className: "exec-card-icon" },
                                React.createElement("i", { className: "fas fa-chart-line" }))),
                        React.createElement("div", { className: "exec-progress" },
                            React.createElement("div", { className: "exec-progress-fill", style: { width: `${executiveSummary.progressAvg}%` } }))),

                    // 3. TAREAS
                    React.createElement("div", { className: "exec-card" },
                        React.createElement("div", { className: "exec-card-top" },
                            React.createElement("div", null,
                                React.createElement("div", { className: "exec-label" }, "Carga de trabajo"),
                                React.createElement("div", { className: "exec-value" }, executiveSummary.tasksTotal),
                                React.createElement("div", { className: "exec-note" }, "Abiertas: ", executiveSummary.tasksOpen)),
                            React.createElement("div", { className: "exec-card-icon" },
                                React.createElement("i", { className: "fas fa-list-check" })))),

// 4. INCIDENCIAS (BLOQUEOS + ALERTAS) - LINKADO A LA NUEVA VISTA
React.createElement("div", {
  className: "exec-card cursor-pointer hover:ring-2 hover:ring-red-100 transition-all",
  onClick: () => window.location.hash = '#/alerts',
  title: "Abrir centro de alertas"
},
  React.createElement("div", { className: "exec-card-top" },
    React.createElement("div", null,
      React.createElement("div", { className: "exec-label" }, "Incidencias"),
      React.createElement(
        "div",
        {
          className: "exec-value",
          style: {
            color: (executiveSummary.blockedTasks + executiveSummary.redProjects + executiveSummary.urgentTasks) > 0
              ? "#ef4444"
              : "inherit"
          }
        },
        (executiveSummary.blockedTasks + executiveSummary.redProjects + executiveSummary.urgentTasks)
      ),
      React.createElement("div", { className: "exec-note" },
        (executiveSummary.blockedTasks + executiveSummary.redProjects + executiveSummary.urgentTasks) > 0
          ? "Requiere atención"
          : "Sin incidencias"
      )
    ),
    React.createElement("div", { className: "exec-card-icon exec-card-icon-warn" },
      React.createElement("i", { className: "fas fa-shield-halved" }))
  ),
  React.createElement("div", { className: "mt-4 flex flex-col gap-1 text-[10px] text-gray-500 font-bold uppercase tracking-tight" },
    React.createElement("div", { className: "flex items-center gap-2" },
      React.createElement("span", { className: `h-2 w-2 rounded-full ${executiveSummary.blockedTasks > 0 ? 'bg-orange-400' : 'bg-gray-200'}` }),
      React.createElement("span", null, executiveSummary.blockedTasks, " Tareas Bloqueadas")
    ),
    React.createElement("div", { className: "flex items-center gap-2" },
      React.createElement("span", { className: `h-2 w-2 rounded-full ${executiveSummary.redProjects > 0 ? 'bg-red-500 animate-pulse' : 'bg-gray-200'}` }),
      React.createElement("span", null, executiveSummary.redProjects, " Alertas Críticas")
    ),
    React.createElement("div", { className: "flex items-center gap-2" },
      React.createElement("span", { className: `h-2 w-2 rounded-full ${executiveSummary.urgentTasks > 0 ? 'bg-amber-500 animate-pulse' : 'bg-gray-200'}` }),
      React.createElement("span", null, executiveSummary.urgentTasks, " Tareas Urgentes")
    )
  )
),


                    // 5. CARGA POR RESPONSABLE (DOBLE)
                    React.createElement("div", {
                        className: "exec-card md:col-span-2 cursor-pointer hover:ring-2 hover:ring-indigo-100 transition-all",
                        onClick: () => window.location.hash = '#/workload',
                        title: "Ver detalle detallado por persona"
                    },
                        React.createElement("div", { className: "exec-card-top mb-5" },
                            React.createElement("div", { className: "exec-label" }, "Carga por Persona"),
                            React.createElement("div", { className: "exec-card-icon" }, React.createElement("i", { className: "fas fa-users" }))),
                        React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5" },
                            executiveSummary.workloadData.map((item, i) => (
                                React.createElement("div", { key: i },
                                    React.createElement("div", { className: "flex justify-between text-sm mb-2" },
                                        React.createElement("span", { className: "font-bold truncate" }, item.name),
                                        React.createElement("span", { className: "text-gray-500 font-medium" }, item.count)),
                                    React.createElement("div", { className: "w-full h-2 bg-gray-200 rounded-full overflow-hidden" },
                                        React.createElement("div", { className: "h-full bg-indigo-500", style: { width: `${Math.min(100, (item.count / 10) * 100)}%` } }))
                                )
                            )))),

                    // 6. PRÓXIMOS VENCIMIENTOS (INTERACTIVA)
                    React.createElement("div", {
                        className: "exec-card md:col-span-2 cursor-pointer hover:ring-2 hover:ring-cyan-100 transition-all",
                        onClick: () => window.location.hash = '#/alerts', // <-- Ahora te lleva al Centro de Control con la nueva sección
                        title: "Ver detalles de vencimientos"
                    },
                        React.createElement("div", { className: "exec-card-top mb-5" },
                            React.createElement("div", { className: "exec-label" }, "Próximos Vencimientos"),
                            React.createElement("div", { className: "exec-card-icon" }, React.createElement("i", { className: "fas fa-calendar-day" }))),
                        React.createElement("div", { className: "space-y-3" },
                            executiveSummary.sortedDeadlines.length > 0 ? executiveSummary.sortedDeadlines.map((item, i) => (
                                React.createElement("div", { key: i, className: "flex items-center justify-between p-3 rounded-xl bg-black/5" },
                                    React.createElement("div", { className: "min-w-0 flex-1" },
                                        React.createElement("div", { className: "text-sm font-bold truncate" }, item.tarea),
                                        React.createElement("div", { className: "text-[11px] text-gray-500 truncate mt-0.5" }, item.proyecto)),
                                    React.createElement("div", { className: "ml-4 text-[12px] font-bold text-cyan-600 bg-cyan-50 px-2 py-1 rounded-md" }, window.formatFechaES(item.fecha)))
                            )) : React.createElement("p", { className: "text-sm italic text-gray-400 p-2" }, "Sin vencimientos cercanos")))
                )
            ),

            // SECCIONES DE PROYECTOS
            showSectionActive && React.createElement("div", { className: "section-tapiz section--ejecucion p-6 rounded-2xl border", "data-estado-seccion": "En Ejecuci\u00F3n", onDragOver: handleSectionDragOver, onDrop: (e) => handleSectionDrop(e, 'En Ejecución') },
                React.createElement("h2", { className: "text-lg font-bold text-blue-900 mb-6 flex items-center gap-2" },
                    React.createElement("span", { className: "bg-blue-500 w-2 h-2 rounded-full" }),
                    " En Ejecuci\u00F3n",
                    React.createElement("span", { className: "ml-2 bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs" }, activeProjects.length)),
                activeProjects.length > 0 ? (React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" }, activeProjects.map(p => React.createElement(ProjectCard, { key: p.id, p: p, onSelect: onSelect, onDelete: onDelete, dnd: {
                        onDragStart: handleProjectDragStart,
                        onDragEnd: handleProjectDragEnd,
                        onDragOver: handleProjectCardDragOver,
                        onDrop: handleProjectCardDrop,
                        isDragging: draggingProjectId === p.id,
                        isDragOver: dragOverProjectId === p.id,
                        blockClickRef
                    } })))) : React.createElement("p", { className: "text-gray-400 text-sm italic" }, "No hay proyectos en curso.")),

            showSectionPaused && React.createElement("div", { className: "section-tapiz section--pausa p-6 rounded-2xl border", "data-estado-seccion": "En Pausa", onDragOver: handleSectionDragOver, onDrop: (e) => handleSectionDrop(e, 'En Pausa') },
                React.createElement("h2", { className: "text-lg font-bold text-slate-800 mb-6 flex items-center gap-2" },
                    React.createElement("span", { className: "bg-slate-500 w-2 h-2 rounded-full" }),
                    " En Pausa",
                    React.createElement("span", { className: "ml-2 bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full text-xs" }, pausedProjects.length)),
                pausedProjects.length > 0 ? (React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" }, pausedProjects.map(p => React.createElement(ProjectCard, { key: p.id, p: p, onSelect: onSelect, onDelete: onDelete, dnd: {
                        onDragStart: handleProjectDragStart,
                        onDragEnd: handleProjectDragEnd,
                        onDragOver: handleProjectCardDragOver,
                        onDrop: handleProjectCardDrop,
                        isDragging: draggingProjectId === p.id,
                        isDragOver: dragOverProjectId === p.id,
                        blockClickRef
                    } })))) : React.createElement("p", { className: "text-gray-400 text-sm italic" }, "No hay proyectos en pausa.")),

            showSectionReview && React.createElement("div", { className: "section-tapiz section--revision p-6 rounded-2xl border", "data-estado-seccion": "En Revisi\u00F3n", onDragOver: handleSectionDragOver, onDrop: (e) => handleSectionDrop(e, 'En Revisión') },
                React.createElement("h2", { className: "text-lg font-bold text-violet-900 mb-6 flex items-center gap-2" },
                    React.createElement("span", { className: "bg-violet-500 w-2 h-2 rounded-full" }),
                    " En Revisi\u00F3n",
                    React.createElement("span", { className: "ml-2 bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full text-xs" }, reviewProjects.length)),
                reviewProjects.length > 0 ? (React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" }, reviewProjects.map(p => React.createElement(ProjectCard, { key: p.id, p: p, onSelect: onSelect, onDelete: onDelete, dnd: {
                        onDragStart: handleProjectDragStart,
                        onDragEnd: handleProjectDragEnd,
                        onDragOver: handleProjectCardDragOver,
                        onDrop: handleProjectCardDrop,
                        isDragging: draggingProjectId === p.id,
                        isDragOver: dragOverProjectId === p.id,
                        blockClickRef
                    } })))) : React.createElement("p", { className: "text-gray-400 text-sm italic" }, "No hay proyectos en revisi\u00F3n.")),

            completedProjects.length > 0 && showSectionCompleted && (React.createElement("div", { className: "section-tapiz section--completado p-6 rounded-2xl border", "data-estado-seccion": "Completado", onDragOver: handleSectionDragOver, onDrop: (e) => handleSectionDrop(e, 'Completado') },
                React.createElement("h2", { className: "text-lg font-bold text-gray-700 mb-6 flex items-center gap-2 opacity-75" },
                    React.createElement("span", { className: "bg-green-500 w-2 h-2 rounded-full" }),
                    " Hist\u00F3rico / Completados"),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 opacity-75 hover:opacity-100 transition-opacity" }, completedProjects.map(p => React.createElement(ProjectCard, { key: p.id, p: p, onSelect: onSelect, onDelete: onDelete, dnd: {
                        onDragStart: handleProjectDragStart,
                        onDragEnd: handleProjectDragEnd,
                        onDragOver: handleProjectCardDragOver,
                        onDrop: handleProjectCardDrop,
                        isDragging: draggingProjectId === p.id,
                        isDragOver: dragOverProjectId === p.id,
                        blockClickRef
                    } })))))))));
};

// --- COMPONENTE: VISTA PREVIA (Read Only) ---
const ProjectPreview = ({ data }) => {
    const totalTasks = (data.tasks || []).length;
const completedTasks = (data.tasks || []).filter(t => t.estado === 'Completado').length;

// Nuevo: progreso real contando subtareas done
const progress = (() => {
    const tasks = Array.isArray(data.tasks) ? data.tasks : [];
    if (!tasks.length) return 0;

    let sum = 0;
    tasks.forEach(t => {
        if (t.estado === 'Completado') { sum += 1; return; }
        const subs = Array.isArray(t.subtasks) ? t.subtasks : [];
        if (subs.length > 0) {
            const done = subs.filter(s => !!s.done).length;
            sum += (done / subs.length);
            return;
        }
        sum += 0;
    });

    return Math.round((sum / tasks.length) * 100);
})();

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completado': return 'status-completed';
            case 'Pendiente': return 'status-pending';
            case 'En Curso': return 'status-inprogress';
                        default: return 'status-default';
        }
    };
    const taskIndex = buildTaskIndex(data.tasks);
    const getDependencyLabel = (task) => {
        if (!task.dependsOn)
            return null;
        const dep = taskIndex.get(task.dependsOn);
        if (!dep)
            return 'Dependencia no encontrada';
        return `${dep.area} - ${dep.tarea}`;
    };
    return (React.createElement("div", { className: "bg-gray-50 print-container" },
        React.createElement("div", { className: "max-w-7xl mx-auto space-y-6" },
            React.createElement("div", { id: "header-container", className: "print-header flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-8 rounded-xl shadow-sm border border-gray-200" },
                React.createElement("div", { className: "header-left-part flex items-center w-full md:w-2/3 gap-4 md:gap-6" },
  data.meta.clientLogoData && React.createElement("img", { src: normalizeDataImage(data.meta.clientLogoData), alt: "Logo Cliente", className: "h-14 w-auto object-contain shrink-0 logo-print" }),
  React.createElement("div", null,
    React.createElement("h1", { className: "text-3xl font-bold text-gray-900 leading-tight tracking-tight" }, data.meta.titulo),
    React.createElement("p", { className: "text-gray-500 mt-2 text-lg" }, data.meta.subtitulo),

    React.createElement("div", { className: "mt-3 text-xs text-gray-700 leading-snug" },
      data.meta.responsableProyecto && React.createElement("div", null,
        React.createElement("span", { className: "font-semibold" }, "Responsable: "),
        data.meta.responsableProyecto
      ),
      data.meta.ejecutorProyecto && React.createElement("div", null,
        React.createElement("span", { className: "font-semibold" }, "Ejecutor: "),
        data.meta.ejecutorProyecto
      ),
      React.createElement("div", { className: "text-xs text-gray-500 mt-1" },
        "Fecha de emisión: ",
        new Date().toLocaleDateString("es-ES")
      )
    )
  )
),

                React.createElement("div", { className: "header-right-part mt-4 md:mt-0 flex items-center gap-6 self-start md:self-center" },
                    React.createElement("div", { className: "hidden md:block w-px h-12 bg-gray-200 no-print" }),
                    React.createElement("img", { src: UNITECNIC_LOGO_BASE64, alt: "Unitecnic", className: "h-10 md:h-12 object-contain logo-print" }))),
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6" },
                React.createElement("div", { className: "bg-white p-6 rounded-xl shadow-sm border border-gray-200" },
                    React.createElement("div", { className: "flex items-center justify-between gap-4" },
                        React.createElement("div", { className: "min-w-0" },
                            React.createElement("p", { className: "text-sm font-medium text-gray-500" }, "Estado Global"),
                            React.createElement("p", { className: "text-3xl font-bold text-gray-900 mt-2 tabular-nums" },
                                progress,
                                "%"),
                            React.createElement("p", { className: "text-xs text-gray-400 mt-1" }, "Completado")),
                        React.createElement("div", { className: "shrink-0" },
                            React.createElement("svg", { width: "64", height: "64", viewBox: "0 0 64 64", className: "block" },
                                React.createElement("circle", { cx: "32", cy: "32", r: "26", fill: "none", stroke: "var(--progress-track)", strokeWidth: "8" }),
                                React.createElement("circle", { cx: "32", cy: "32", r: "26", fill: "none", stroke: "#2563EB", strokeWidth: "8", strokeLinecap: "round", transform: "rotate(-90 32 32)", strokeDasharray: 2 * Math.PI * 26, strokeDashoffset: (2 * Math.PI * 26) * (1 - (progress / 100)) }),
                                React.createElement("text", { x: "32", y: "36", textAnchor: "middle", fontSize: "14", fontWeight: "700", fill: "var(--progress-text)", className: "tabular-nums" },
                                    progress,
                                    "%"))))),
                React.createElement("div", { className: "bg-white p-6 rounded-xl shadow-sm border border-gray-200" },
                    React.createElement("div", { className: "flex items-center justify-between" },
                        React.createElement("div", null,
                            React.createElement("p", { className: "text-sm font-medium text-gray-500" }, "Tareas Resueltas"),
                            React.createElement("p", { className: "text-3xl font-bold text-green-600 mt-2" }, completedTasks)),
                        React.createElement("div", { className: "w-12 h-12 flex items-center justify-center bg-green-50 rounded-full text-green-600" },
                            React.createElement("i", { className: "fas fa-check" })))),
                React.createElement("div", { className: "bg-white p-6 rounded-xl shadow-sm border border-gray-200" },
                    React.createElement("div", { className: "flex items-center justify-between" },
                        React.createElement("div", null,
                            React.createElement("p", { className: "text-sm font-medium text-gray-500" }, "Pendientes"),
                            React.createElement("p", { className: "text-3xl font-bold text-orange-600 mt-2" }, totalTasks - completedTasks)),
                        React.createElement("div", { className: "w-12 h-12 flex items-center justify-center bg-orange-50 rounded-full text-orange-600" },
                            React.createElement("i", { className: "fas fa-clock" }))))),
            React.createElement("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" },
                React.createElement("div", { className: "px-6 py-4 border-b border-gray-200 bg-gray-50" },
                    React.createElement("h2", { className: "text-lg font-semibold text-gray-800" }, "Detalle de Trabajos")),
                React.createElement("div", { className: "w-full overflow-x-auto" },
                    React.createElement("table", { className: "w-full min-w-[1100px] table-fixed text-left border-collapse text-sm" },
                        React.createElement("thead", null,
                            React.createElement("tr", { className: "bg-gray-50 text-gray-500 text-xs uppercase tracking-wider" },
                                React.createElement("th", { className: "px-4 py-3 font-medium whitespace-normal break-words w-1/5" }, "\u00C1rea"),
                                React.createElement("th", { className: "px-4 py-3 font-medium whitespace-normal break-words w-1/4" }, "Tarea"),
                                React.createElement("th", { className: "px-4 py-3 font-medium whitespace-normal break-words w-1/6 internal-only" }, "Asignado"),
                                React.createElement("th", { className: "px-4 py-3 font-medium whitespace-normal break-words w-1/6" }, "Estado"),
                                React.createElement("th", { className: "px-4 py-3 font-medium whitespace-normal break-words w-1/6" }, "Prioridad"),
                                React.createElement("th", { className: "px-4 py-3 font-medium whitespace-normal break-words w-1/4" }, "Detalles"),
                                React.createElement("th", { className: "px-4 py-3 font-medium whitespace-normal break-words w-1/6" }, "Inicio"),
                                React.createElement("th", { className: "px-4 py-3 font-medium whitespace-normal break-words w-1/6" }, "L\u00EDmite"))),
React.createElement("tbody", { className: "divide-y divide-gray-200" },
    data.tasks.map((row) => {
        var _a;
        return (React.createElement("tr", { key: row.id, className: "hover:bg-gray-50 transition-colors" },

            // 1. Columna ÁREA
            React.createElement("td", { className: "px-4 py-3 align-top whitespace-normal break-words" },
                React.createElement("div", { className: "flex items-center" },
                    React.createElement("div", {
                        className: "p-1.5 rounded-lg mr-2 no-print flex items-center justify-center " + (
                            row.iconType === 'wifi' ? 'bg-blue-100 text-blue-600' :
                            row.iconType === 'server' ? 'bg-orange-100 text-orange-600' :
                            row.iconType === 'monitor' ? 'bg-indigo-100 text-indigo-600' :
                            row.iconType === 'tv' ? 'bg-purple-100 text-purple-600' :
                            row.iconType === 'users' ? 'bg-green-100 text-green-600' :
                            row.iconType === 'key' ? 'bg-yellow-100 text-yellow-600' :
                            row.iconType === 'alert' ? 'bg-red-100 text-red-600' :
                            row.iconType === 'lock' ? 'bg-slate-200 text-slate-700' :
                            'bg-gray-100 text-gray-600'
                        ),
                        style: { width: '32px', height: '32px' }
                    }, Icons[row.iconType] || Icons.monitor),
                    React.createElement("span", { className: "font-medium text-gray-900" }, row.area))),

            // 2. Columna TAREA (Subtareas aquí)
            React.createElement("td", { className: "px-4 py-3 align-top whitespace-normal break-words" },
                React.createElement("div", { className: "flex flex-col gap-1" },
                    React.createElement("span", { className: "text-gray-900 font-bold" }, row.tarea),

                    (row.subtasks && row.subtasks.length > 0) && React.createElement("div", { className: "mt-2 ml-1 border-l-2 border-gray-200 pl-2" },
                        row.subtasks.map(sub =>
                            React.createElement("div", { key: sub.id, className: "flex items-start gap-2 mt-1" },
                                React.createElement("span", { className: sub.done ? "text-emerald-600 font-bold text-xs" : "text-gray-300 text-xs" }, sub.done ? "☑" : "☐"),
                                React.createElement("span", { className: `text-xs ${sub.done ? "line-through text-gray-400" : "text-gray-600"}` }, sub.text)
                            )
                        )
                    ),

                    isTaskBlocked(row, taskIndex) && (React.createElement("span", { className: "inline-flex items-center gap-2 text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 w-fit dependency-pill mt-1" },
                        React.createElement("i", { className: "fas fa-lock" }),
                        "Bloqueada por: ",
                        React.createElement("span", { className: "font-medium" }, getDependencyLabel(row) || '—')))
                )
            ),

            // 3. Columna ASIGNADO
            React.createElement("td", { className: "px-4 py-3 align-top whitespace-normal break-words internal-only" },
                React.createElement("span", { className: "text-gray-700" }, row.asignadoA ? row.asignadoA : '-')),

            // 4. Columna ESTADO
            React.createElement("td", { className: "px-4 py-3 align-top whitespace-normal break-words" },
                React.createElement("span", { className: `status-pill px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusColor(row.estado)}` }, row.estado)),

            // 5. Columna PRIORIDAD
React.createElement("td", { className: "px-4 py-3 align-top whitespace-normal break-words" },
  React.createElement("span", {
    className:
      `status-pill px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ` +
      (
        (row.prioridad || 'Media') === 'Urgente' ? 'bg-rose-50 text-rose-700 border-rose-200' :
        (row.prioridad || 'Media') === 'Alta'    ? 'bg-amber-50 text-amber-700 border-amber-200' :
        (row.prioridad || 'Media') === 'Baja'    ? 'bg-slate-50 text-slate-700 border-slate-200' :
                                                   'bg-blue-50 text-blue-700 border-blue-200'
      )
  }, (row.prioridad || 'Media'))),

            // 6. Columna DETALLES (Limpia)
            React.createElement("td", { className: "px-4 py-3 align-top whitespace-normal break-words" },
                React.createElement("span", { className: "text-sm text-gray-600" }, (_a = row.detalles) !== null && _a !== void 0 ? _a : '')),

            // 7. Columna FECHA INICIO
            React.createElement("td", { className: "px-4 py-3 align-top whitespace-normal break-words" },
                React.createElement("span", { className: `text-sm ${(row.fechaLimite || '').includes('Dic') || (row.fechaLimite || '').includes('Urgente') ? 'text-red-600 font-medium' : 'text-gray-500'}` }, window.formatFechaES(row.fechaInicio))),

            // 8. Columna FECHA LÍMITE
            React.createElement("td", { className: "px-4 py-3 align-top whitespace-normal break-words" },
                React.createElement("span", { className: `text-sm ${(row.fechaLimite || '').includes('Dic') || (row.fechaLimite || '').includes('Urgente') ? 'text-red-600 font-medium' : 'text-gray-500'}` }, window.formatFechaES(row.fechaLimite)))
        ));
    }))))))));
};

const buildProjectDetailModel = (project) => {
    const tasks = Array.isArray(project && project.tasks) ? project.tasks : [];
    const idx = buildTaskIndex(tasks);
    const stats = computeProjectStats(tasks);
    const wiki = getProjectWikiData(project);
    const wikiDocumented = hasWikiDocumentation(project);
    const rows = flattenTimeEntries([project]);
    const totals = rows.reduce((acc, row) => {
        acc.hours += toNumberOrZero(row.hours);
        acc.km += toNumberOrZero(row.mileageKm);
        if ((row.allowanceType && row.allowanceType !== 'Ninguna') || toNumberOrZero(row.allowanceAmount) > 0) acc.allowanceCount += 1;
        acc.allowance += toNumberOrZero(row.allowanceAmount);
        return acc;
    }, { hours: 0, km: 0, allowance: 0, allowanceCount: 0 });
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dueSoonLimit = new Date(today);
    dueSoonLimit.setDate(today.getDate() + 14);
    const openTasks = tasks.filter(t => effectiveEstado(t, idx) !== 'Completado');
    const completedTasks = tasks.filter(t => effectiveEstado(t, idx) === 'Completado');
    const overdueTasks = openTasks.filter(t => {
        const d = parseDateOnly(t.fechaLimite);
        return d && d < today;
    });
    const upcomingTasks = openTasks
        .filter(t => {
            const d = parseDateOnly(t.fechaLimite);
            return d && d >= today && d <= dueSoonLimit;
        })
        .sort((a, b) => String(a.fechaLimite || '').localeCompare(String(b.fechaLimite || '')))
        .slice(0, 6);
    const blockedTasks = openTasks.filter(t => isTaskBlocked(t, idx));
    const urgentTasks = openTasks.filter(t => ['Urgente', 'Alta'].includes(t.prioridad || ''));
    const incidentItems = [
        ...overdueTasks.map(t => ({ type: 'Vencida', tone: 'critical', task: t })),
        ...blockedTasks.map(t => ({ type: 'Bloqueada', tone: 'warning', task: t })),
        ...urgentTasks.map(t => ({ type: t.prioridad || 'Alta', tone: (t.prioridad === 'Urgente' ? 'critical' : 'warning'), task: t }))
    ];
    const progress = stats.progress || 0;
    const status = getProjectStatus(project);
    let health = { label: 'Correcto', tone: 'good', icon: 'fa-circle-check', text: 'El proyecto no presenta señales relevantes de riesgo.' };
    if (status === 'Completado') health = { label: 'Completado', tone: 'done', icon: 'fa-circle-check', text: 'El proyecto está completado. Mantén la documentación cerrada y accesible.' };
    else if (status === 'En Pausa') health = { label: 'En pausa', tone: 'paused', icon: 'fa-circle-pause', text: 'El proyecto está pausado. Conviene revisar próximos pasos antes de reactivarlo.' };
    else if (overdueTasks.length || blockedTasks.length > 1 || urgentTasks.some(t => t.prioridad === 'Urgente')) health = { label: 'Crítico', tone: 'critical', icon: 'fa-triangle-exclamation', text: 'Hay tareas vencidas, bloqueos o prioridades urgentes que requieren intervención.' };
    else if (upcomingTasks.length || blockedTasks.length || !wikiDocumented || (status === 'En Ejecución' && rows.length === 0) || (tasks.length && progress < 35)) health = { label: 'Atención requerida', tone: 'warning', icon: 'fa-circle-exclamation', text: 'El proyecto avanza, pero hay elementos que conviene revisar para evitar desvíos.' };
    const nextDueTask = upcomingTasks[0] || openTasks
        .filter(t => parseDateOnly(t.fechaLimite))
        .sort((a, b) => String(a.fechaLimite || '').localeCompare(String(b.fechaLimite || '')))[0];
    const activity = [];
    const audit = (project && project.audit && Array.isArray(project.audit.activity)) ? project.audit.activity : [];
    audit.forEach(item => activity.push({ ts: item.ts, icon: 'fa-history', title: item.message || 'Actividad registrada', meta: item.user || 'Usuario' }));
    rows.slice(0, 6).forEach(row => activity.push({ ts: parseDateOnly(row.date)?.getTime() || 0, icon: 'fa-clock', title: `Imputación de ${toNumberOrZero(row.hours).toLocaleString('es-ES')} h`, meta: row.user || 'Sin persona' }));
    tasks.slice(-6).forEach(task => activity.push({ ts: parseDateOnly(task.fechaLimite)?.getTime() || 0, icon: 'fa-list-check', title: task.tarea || 'Tarea del proyecto', meta: task.estado || 'Sin estado' }));
    if (wiki.updatedAt) activity.push({ ts: new Date(wiki.updatedAt).getTime(), icon: 'fa-book', title: 'Wiki actualizada', meta: formatWikiDate(wiki.updatedAt) });
    const activityList = activity
        .filter(item => item.title)
        .sort((a, b) => (Number(b.ts) || 0) - (Number(a.ts) || 0))
        .slice(0, 8);
    const recommendations = [];
    if (overdueTasks.length) recommendations.push(`Revisar ${overdueTasks.length} tarea${overdueTasks.length === 1 ? '' : 's'} vencida${overdueTasks.length === 1 ? '' : 's'}.`);
    if (blockedTasks.length) recommendations.push('Resolver tareas bloqueadas o completar sus dependencias.');
    if (upcomingTasks.length) recommendations.push(`Revisar ${upcomingTasks.length} tarea${upcomingTasks.length === 1 ? '' : 's'} próxima${upcomingTasks.length === 1 ? '' : 's'} a vencer.`);
    if (!wikiDocumented) recommendations.push('Completar documentación de la wiki.');
    if (status === 'En Ejecución' && rows.length === 0) recommendations.push('Añadir imputaciones si ya se ha trabajado en este proyecto.');
    if (!recommendations.length) recommendations.push('Mantener seguimiento periódico y actualizar la actividad relevante.');
    return { tasks, idx, stats, wiki, wikiDocumented, rows, totals, openTasks, completedTasks, overdueTasks, upcomingTasks, blockedTasks, urgentTasks, incidentItems, progress, status, health, nextDueTask, activityList, recommendations };
};

const ProjectDetailDashboard = ({ project, onEdit, onAddTask, onAddTimeEntry, onEditTimeEntry, onDeleteTimeEntry, onPrint }) => {
    const [activeTab, setActiveTab] = React.useState('summary');
    const [taskQuery, setTaskQuery] = React.useState('');
    const [taskStatus, setTaskStatus] = React.useState('Todos');
    const [taskAssignee, setTaskAssignee] = React.useState('Todos');
    const [taskPriority, setTaskPriority] = React.useState('Todos');
    const model = React.useMemo(() => buildProjectDetailModel(project), [project]);
    const title = getProjectTitle(project);
    const client = getProjectClient(project) || 'Sin cliente';
    const meta = (project && project.meta) || {};
    const clientLogoSrc = getClientLogoSrc(project);
    const clientInitials = getClientInitials(project);
    const [clientLogoFailed, setClientLogoFailed] = React.useState(false);
    React.useEffect(() => {
        setClientLogoFailed(false);
    }, [project && project.id, clientLogoSrc]);
    const assignees = React.useMemo(() => Array.from(new Set(model.tasks.map(t => t.asignadoA || '').filter(Boolean))).sort((a, b) => a.localeCompare(b, 'es')), [model.tasks]);
    const filteredTasks = React.useMemo(() => {
        const q = taskQuery.trim().toLowerCase();
        return model.tasks.filter(task => {
            const effective = effectiveEstado(task, model.idx);
            if (q && ![task.area, task.tarea, task.detalles, task.asignadoA].join(' ').toLowerCase().includes(q)) return false;
            if (taskStatus !== 'Todos' && effective !== taskStatus) return false;
            if (taskAssignee !== 'Todos' && (task.asignadoA || '') !== taskAssignee) return false;
            if (taskPriority !== 'Todos' && (task.prioridad || 'Media') !== taskPriority) return false;
            return true;
        });
    }, [model, taskQuery, taskStatus, taskAssignee, taskPriority]);
    const tabs = [
        ['summary', 'Resumen', 'fa-chart-pie'],
        ['tasks', 'Tareas', 'fa-list-check'],
        ['gantt', 'Gantt', 'fa-timeline'],
        ['imputations', 'Imputaciones', 'fa-business-time'],
        ['wiki', 'Wiki', 'fa-book'],
        ['incidents', 'Incidencias', 'fa-shield-halved'],
        ['activity', 'Actividad', 'fa-clock-rotate-left'],
        ['documents', 'Documentos', 'fa-folder-open']
    ];
    const kpis = [
        ['Progreso', `${model.progress}%`, `${model.completedTasks.length} de ${model.tasks.length} tareas`, 'fa-gauge-high'],
        ['Tareas abiertas', model.openTasks.length, `${model.overdueTasks.length} vencidas`, 'fa-list-check'],
        ['Incidencias', model.incidentItems.length, `${model.blockedTasks.length} bloqueadas`, 'fa-shield-halved'],
        ['Próximo vencimiento', model.nextDueTask ? (window.formatFechaES ? window.formatFechaES(model.nextDueTask.fechaLimite) : model.nextDueTask.fechaLimite) : 'Sin datos', model.nextDueTask ? (model.nextDueTask.tarea || 'Tarea') : 'No hay fechas próximas', 'fa-calendar-day']
    ];
    const renderEmpty = (icon, titleText, text) => (
        <div className="project-empty-state">
            <i className={`fas ${icon}`}></i>
            <strong>{titleText}</strong>
            <span>{text}</span>
        </div>
    );
    const renderTaskList = (items) => (
        items.length ? <div className="project-task-list">
            {items.map(task => {
                const blocked = isTaskBlocked(task, model.idx);
                const effective = effectiveEstado(task, model.idx);
                const due = task.fechaLimite ? (window.formatFechaES ? window.formatFechaES(task.fechaLimite) : task.fechaLimite) : 'Sin fecha';
                const dueDate = parseDateOnly(task.fechaLimite);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const soon = new Date(today);
                soon.setDate(today.getDate() + 7);
                const dueTone = dueDate && dueDate < today && effective !== 'Completado' ? 'overdue' : (dueDate && dueDate <= soon && effective !== 'Completado' ? 'soon' : 'normal');
                const initials = String(task.asignadoA || 'Sin asignar').trim().slice(0, 1).toUpperCase() || '-';
                return <article className={`project-task-card ${blocked ? 'blocked' : ''}`} key={task.id}>
                    <div className="project-task-card-main">
                        <span className="project-task-area">{task.area || 'General'}</span>
                        <strong>{task.tarea || 'Tarea sin título'}</strong>
                        <small>{task.detalles || 'Sin detalles'}</small>
                        {blocked && <div className="project-task-blocked"><i className="fas fa-lock"></i>Bloqueada por una dependencia pendiente</div>}
                    </div>
                    <div className="project-task-card-meta">
                        <span className={`task-state task-state--${String(effective).toLowerCase().replace(/\s+/g, '-')}`}>{effective}</span>
                        <span className={`task-priority task-priority--${String(task.prioridad || 'Media').toLowerCase()}`}>{task.prioridad || 'Media'}</span>
                        <span className="task-assignee"><b>{initials}</b>{task.asignadoA || 'Sin asignar'}</span>
                        <span className={`task-due task-due--${dueTone}`}><i className="fas fa-calendar-day"></i>{due}</span>
                    </div>
                </article>;
            })}
        </div> : renderEmpty('fa-list-check', 'Sin tareas', 'No hay tareas que coincidan con los filtros seleccionados.')
    );
    const renderSummary = () => {
        const riskItems = [...model.overdueTasks, ...model.blockedTasks, ...model.urgentTasks];
        const hasDocuments = !!meta.sharepointUrl;
        return <div className="project-summary-grid project-summary-grid--executive">
            <section className={`project-health-card project-health-card--${model.health.tone}`}>
                <div className="project-panel-head">
                    <div><span>Salud del proyecto</span><h2>{model.health.label}</h2></div>
                    <i className={`fas ${model.health.icon}`}></i>
                </div>
                <p>{model.health.text}</p>
                <div className="project-health-chips">
                    <span>{model.openTasks.length} tareas abiertas</span>
                    <span>{model.incidentItems.length ? `${model.incidentItems.length} incidencias` : 'Sin incidencias'}</span>
                    <span>{model.wikiDocumented ? 'Wiki documentada' : 'Wiki pendiente'}</span>
                    <span>{model.totals.hours.toLocaleString('es-ES')} h imputadas</span>
                </div>
            </section>
            <section className="project-panel project-summary-next">
                <div className="project-panel-head"><div><span>Proximo hito</span><h2>Vencimiento inmediato</h2></div><button type="button" onClick={() => setActiveTab('tasks')}>Ver tareas</button></div>
                {model.upcomingTasks.length ? renderTaskList(model.upcomingTasks.slice(0, 2)) : renderEmpty('fa-calendar-check', 'Sin vencimientos proximos', 'No hay tareas con fecha limite en los proximos 14 dias.')}
            </section>
            <section className="project-panel project-summary-risks">
                <div className="project-panel-head"><div><span>Riesgos principales</span><h2>Tareas criticas o bloqueadas</h2></div>{riskItems.length > 3 && <button type="button" onClick={() => setActiveTab('tasks')}>Ver todas</button>}</div>
                {riskItems.length ? renderTaskList(riskItems.slice(0, 3)) : renderEmpty('fa-shield-heart', 'Sin riesgos destacados', 'No hay tareas vencidas, bloqueadas o urgentes.')}
            </section>
            <section className="project-panel project-summary-status">
                <div className="project-panel-head"><div><span>Estado operativo</span><h2>Documentacion e imputaciones</h2></div></div>
                <div className="project-summary-mini-grid">
                    <button type="button" onClick={() => setActiveTab('imputations')}><strong>{model.totals.hours.toLocaleString('es-ES')} h registradas</strong><span>{model.totals.km.toLocaleString('es-ES')} km · {model.totals.allowanceCount.toLocaleString('es-ES')} dieta{model.totals.allowanceCount === 1 ? '' : 's'}</span></button>
                    <button type="button" onClick={() => window.location.hash = `#/wiki/${encodeURIComponent(String(project.id || ''))}`}><strong>{model.wikiDocumented ? 'Wiki documentada' : 'Wiki pendiente'}</strong><span>{formatWikiDate(model.wiki.updatedAt)}</span></button>
                    <button type="button" onClick={() => setActiveTab('incidents')}><strong>{model.incidentItems.length ? `${model.incidentItems.length} incidencias` : 'Sin incidencias'}</strong><span>Ver detalle operativo</span></button>
                    <button type="button" onClick={() => setActiveTab('documents')}><strong>{hasDocuments ? 'Documentos vinculados' : 'Sin documentos'}</strong><span>{hasDocuments ? 'SharePoint disponible' : 'Sin enlaces'}</span></button>
                </div>
            </section>
            <section className="project-panel project-summary-action-panel">
                <div className="project-panel-head"><div><span>Siguiente accion</span><h2>Recomendacion principal</h2></div></div>
                <div className="project-summary-action"><i className="fas fa-lightbulb"></i><span>{model.recommendations[0] || 'No hay acciones urgentes.'}</span></div>
            </section>
        </div>;
    };
    return <div className="project-detail-page">
        <header className="project-detail-hero">
            <div className="project-detail-title">
                <span className="project-status-pill">{model.status}</span>
                <h1>{title}</h1>
                <p>{client} · Responsable: {meta.responsableProyecto || meta.ejecutorProyecto || 'Sin asignar'}</p>
            </div>
            <div className="project-detail-side">
                <div className="project-client-logo" title={client}>
                    {clientLogoSrc && !clientLogoFailed ? <img src={clientLogoSrc} alt={`Logo ${client}`} onError={() => setClientLogoFailed(true)} /> : <span>{clientInitials}</span>}
                </div>
                <div className="project-detail-meta">
                    <span><strong>Inicio</strong>{model.tasks.find(t => t.fechaInicio)?.fechaInicio ? (window.formatFechaES ? window.formatFechaES(model.tasks.find(t => t.fechaInicio).fechaInicio) : model.tasks.find(t => t.fechaInicio).fechaInicio) : 'Sin datos'}</span>
                    <span><strong>Fin / vencimiento</strong>{model.nextDueTask ? (window.formatFechaES ? window.formatFechaES(model.nextDueTask.fechaLimite) : model.nextDueTask.fechaLimite) : 'Sin datos'}</span>
                    <span><strong>Progreso</strong>{model.progress}%</span>
                </div>
            </div>
            <div className="project-detail-actions no-print">
                <button type="button" onClick={onEdit}><i className="fas fa-pen"></i>Editar proyecto</button>
                <button type="button" onClick={() => { onAddTask(); setActiveTab('tasks'); }}><i className="fas fa-plus"></i>Añadir tarea</button>
                <details className="project-more-actions">
                    <summary><i className="fas fa-ellipsis"></i>Mas acciones</summary>
                    <div>
                        <button type="button" onClick={() => onAddTimeEntry(project.id)}><i className="fas fa-business-time"></i>Anadir imputacion</button>
                        <button type="button" onClick={() => window.location.hash = `#/wiki/${encodeURIComponent(String(project.id || ''))}`}><i className="fas fa-book"></i>Ver wiki</button>
                        <button type="button" onClick={onPrint}><i className="fas fa-print"></i>Imprimir</button>
                    </div>
                </details>
            </div>
        </header>
        <div className="project-detail-kpis">{kpis.map(k => <article key={k[0]}><i className={`fas ${k[3]}`}></i><div><strong>{k[1]}</strong><span>{k[0]}</span><small>{k[2]}</small></div></article>)}</div>
        <nav className="project-detail-tabs no-print">{tabs.map(tab => <button key={tab[0]} className={activeTab === tab[0] ? 'active' : ''} onClick={() => setActiveTab(tab[0])}><i className={`fas ${tab[2]}`}></i>{tab[1]}</button>)}</nav>
        {activeTab === 'summary' && renderSummary()}
        {activeTab === 'tasks' && <section className="project-panel project-panel-wide">
            <div className="project-panel-head"><div><span>Plan de trabajo</span><h2>Tareas</h2></div><button type="button" onClick={onAddTask}>Añadir tarea</button></div>
            <div className="project-task-filters no-print">
                <input value={taskQuery} onChange={e => setTaskQuery(e.target.value)} placeholder="Buscar tarea, área, asignado..." />
                <select value={taskStatus} onChange={e => setTaskStatus(e.target.value)}><option>Todos</option><option>Pendiente</option><option>En Curso</option><option>Completado</option></select>
                <select value={taskAssignee} onChange={e => setTaskAssignee(e.target.value)}><option>Todos</option>{assignees.map(a => <option key={a}>{a}</option>)}</select>
                <select value={taskPriority} onChange={e => setTaskPriority(e.target.value)}><option>Todos</option><option>Urgente</option><option>Alta</option><option>Media</option><option>Baja</option></select>
            </div>
            {renderTaskList(filteredTasks)}
        </section>}
        {activeTab === 'gantt' && <section className="project-panel project-panel-wide"><div className="project-panel-head"><div><span>Planificación</span><h2>Gantt</h2></div></div><div className="project-gantt-list">{model.tasks.filter(t => t.fechaInicio || t.fechaLimite).map(t => <div key={t.id}><strong>{t.tarea || 'Tarea'}</strong><span>{window.formatFechaES ? window.formatFechaES(t.fechaInicio) : (t.fechaInicio || 'Sin inicio')} → {window.formatFechaES ? window.formatFechaES(t.fechaLimite) : (t.fechaLimite || 'Sin fin')}</span></div>)}</div>{!model.tasks.some(t => t.fechaInicio || t.fechaLimite) && renderEmpty('fa-timeline', 'Sin planificación', 'Añade fechas a las tareas para ver la planificación del proyecto.')}</section>}
        {activeTab === 'imputations' && <ProjectTimeEntriesPanelV2 project={project} onAdd={onAddTimeEntry} onEdit={onEditTimeEntry} onDelete={onDeleteTimeEntry} />}
        {activeTab === 'wiki' && <section className="project-panel project-panel-wide"><div className="project-panel-head"><div><span>Documentación técnica y notas de campo.</span><h2>Wiki del proyecto</h2></div><button type="button" onClick={() => window.location.hash = `#/wiki/${encodeURIComponent(String(project.id || ''))}`}>Abrir editor</button></div><p className="project-panel-text">{model.wikiDocumented ? buildWikiExcerpt(project) : 'No hay documentación registrada todavía.'}</p><div className="project-chip-row">{(model.wiki.tags || []).length ? model.wiki.tags.map(tag => <span key={tag}>{tag}</span>) : <span>Sin categorías</span>}<span>Actualizada: {formatWikiDate(model.wiki.updatedAt)}</span></div></section>}
        {activeTab === 'incidents' && <section className="project-panel project-panel-wide"><div className="project-panel-head"><div><span>Alertas del proyecto</span><h2>Incidencias</h2></div></div>{model.incidentItems.length ? <div className="project-incident-list">{model.incidentItems.map((item, idx) => <article className={`project-incident project-incident--${item.tone}`} key={`${item.type}-${item.task.id}-${idx}`}><strong>{item.type}</strong><span>{item.task.tarea || 'Tarea'}</span><small>{item.task.asignadoA || 'Sin asignar'} · {item.task.fechaLimite ? (window.formatFechaES ? window.formatFechaES(item.task.fechaLimite) : item.task.fechaLimite) : 'Sin fecha'}</small></article>)}</div> : renderEmpty('fa-shield-heart', 'No hay incidencias registradas en este proyecto.', 'No se detectan tareas vencidas, bloqueadas ni urgentes.')}</section>}
        {activeTab === 'activity' && <section className="project-panel project-panel-wide"><div className="project-panel-head"><div><span>Últimos eventos</span><h2>Actividad</h2></div></div>{model.activityList.length ? <div className="project-activity-list">{model.activityList.map((item, idx) => <div key={`${item.title}-${idx}`}><i className={`fas ${item.icon}`}></i><div><strong>{item.title}</strong><span>{item.meta} · {item.ts ? new Date(item.ts).toLocaleString('es-ES') : 'Sin fecha'}</span></div></div>)}</div> : renderEmpty('fa-clock-rotate-left', 'Sin actividad todavía', 'La actividad aparecerá cuando se edite el proyecto, tareas, wiki o imputaciones.')}</section>}
        {activeTab === 'documents' && <section className="project-panel project-panel-wide"><div className="project-panel-head"><div><span>Enlaces vinculados</span><h2>Documentos</h2></div></div>{meta.sharepointUrl ? <a className="project-doc-link" href={meta.sharepointUrl} target="_blank" rel="noopener noreferrer"><i className="fas fa-folder-open"></i><div><strong>Carpeta SharePoint</strong><span>{meta.sharepointUrl}</span></div></a> : renderEmpty('fa-folder-open', 'No hay documentos vinculados a este proyecto.', 'Añade una carpeta SharePoint en la edición del proyecto para verla aquí.')}</section>}
    </div>;
};
// --- COMPONENTE: EDITOR DE PROYECTO ---
const ProjectEditor = ({ project, onSave, onBack, onCancelNew, isSaving, theme, onToggleTheme, onAddTimeEntry, onEditTimeEntry, onDeleteTimeEntry }) => {
    var _a;
    const normalizeDependencyValue = (value) => {
        const raw = value === null || value === undefined ? '' : String(value).trim();
        if (!raw || raw === 'null' || raw === 'undefined' || raw === 'NaN')
            return null;
        return raw;
    };
    const normalizeEditorProject = (projectValue) => {
        const source = projectValue || {};
        const tasks = Array.isArray(source.tasks) ? source.tasks : [];
        const usedIds = new Set();
        let changed = false;
        const normalizedTasks = tasks.map((task, index) => {
            const baseTask = task || {};
            let nextId = baseTask.id === null || baseTask.id === undefined || String(baseTask.id).trim() === ''
                ? `task_${index + 1}`
                : String(baseTask.id);
            const originalId = nextId;
            let suffix = 2;
            while (usedIds.has(nextId)) {
                nextId = `${originalId}_${suffix++}`;
                changed = true;
            }
            usedIds.add(nextId);
            const nextDependsOn = normalizeDependencyValue(baseTask.dependsOn);
            if (nextId !== baseTask.id || nextDependsOn !== (baseTask.dependsOn || null))
                changed = true;
            return { ...baseTask, id: nextId, dependsOn: nextDependsOn };
        });
        const validIds = new Set(normalizedTasks.map(task => String(task.id)));
        const cleanedTasks = normalizedTasks.map(task => {
            if (!task.dependsOn || task.dependsOn === task.id || !validIds.has(String(task.dependsOn))) {
                if (task.dependsOn)
                    changed = true;
                return { ...task, dependsOn: null };
            }
            return task;
        });
        return changed ? { ...source, tasks: cleanedTasks } : source;
    };
    const [data, setData] = useState(() => normalizeEditorProject(project));
    const [hasChanges, setHasChanges] = useState(false);
    React.useEffect(() => {
        if (!hasChanges) setData(normalizeEditorProject(project));
    }, [project]);
    const taskIndex = React.useMemo(() => buildTaskIndex(data.tasks || []), [data.tasks]);
    const activityList = React.useMemo(() => {
        const a = (data && data.audit && Array.isArray(data.audit.activity)) ? data.audit.activity : [];
        return [...a].sort((x, y) => (Number(y.ts) || 0) - (Number(x.ts) || 0));
    }, [data]);
    const [viewMode, setViewMode] = useState(project && project.__isDraft ? 'edit' : 'preview');
    const [showExportMenu, setShowExportMenu] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [openIconPickerId, setOpenIconPickerId] = useState(null);
    // --- DRAG & DROP de tareas (reordenación) ---
    const [draggingTaskId, setDraggingTaskId] = useState(null);
    const [dragOverTaskId, setDragOverTaskId] = useState(null);
    const readDraggedTaskId = (e) => {
        try {
            return e.dataTransfer.getData('application/x-unitecnic-task') || e.dataTransfer.getData('text/plain');
        }
        catch (err) {
            return '';
        }
    };



    const reorderTasks = (dragId, beforeId) => {
        setData(prev => {
            const tasks = [...(prev.tasks || [])];
            const fromIdx = tasks.findIndex(t => String(t.id) === String(dragId));
            if (fromIdx < 0)
                return prev;
            const [moving] = tasks.splice(fromIdx, 1);
            let toIdx = tasks.length;
            if (beforeId) {
                const bi = tasks.findIndex(t => String(t.id) === String(beforeId));
                if (bi >= 0)
                    toIdx = bi;
            }
            tasks.splice(toIdx, 0, moving);
            return { ...prev, tasks };
        });
        setHasChanges(true);
    };
    const handleTaskDragStart = (e, taskId) => {
        try {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('application/x-unitecnic-task', String(taskId));
            e.dataTransfer.setData('text/plain', String(taskId));
        }
        catch (err) { }
        setDraggingTaskId(taskId);
    };
    const handleTaskDragEnd = () => {
        setDraggingTaskId(null);
        setDragOverTaskId(null);
    };
    const handleTaskRowDragOver = (e, targetTaskId) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        setDragOverTaskId(targetTaskId);
    };
    const handleTaskRowDrop = (e, targetTaskId) => {
        e.preventDefault();
        const draggedId = readDraggedTaskId(e);
        if (!draggedId)
            return;
        if (String(draggedId) === String(targetTaskId))
            return;
        reorderTasks(draggedId, targetTaskId);
        setDragOverTaskId(null);
        setDraggingTaskId(null);
        setDragOverTaskId(null);
    };
    const handleTaskTableDrop = (e) => {
        e.preventDefault();
        const draggedId = readDraggedTaskId(e);
        if (!draggedId)
            return;
        reorderTasks(draggedId, null);
        setDragOverTaskId(null);
        setDraggingTaskId(null);
        setDragOverTaskId(null);
    };
    const handleTaskTableDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const [showAudit, setShowAudit] = useState(false);

    const toDateInputValue = (v) => {
        const s = (v !== null && v !== void 0 ? v : '').toString().trim();
        return /^\d{4}-\d{2}-\d{2}$/.test(s) ? s : '';
    };
    useEffect(() => {
        const onDocClick = () => { if (openIconPickerId !== null)
            setOpenIconPickerId(null); };
        document.addEventListener('click', onDocClick);
        return () => document.removeEventListener('click', onDocClick);
    }, [openIconPickerId]);
    const isNewDraft = Boolean(project && project.__isDraft);
    const handleCancelNew = () => {
        var _a, _b, _c, _d, _e, _f;
        // Confirmación para evitar perder cambios
        if (isNewDraft) {
            const touched = hasChanges || (((_a = data === null || data === void 0 ? void 0 : data.tasks) === null || _a === void 0 ? void 0 : _a.length) || 0) > 0 ||
                (((_b = data === null || data === void 0 ? void 0 : data.meta) === null || _b === void 0 ? void 0 : _b.titulo) && data.meta.titulo !== 'Nuevo Proyecto') ||
                (((_c = data === null || data === void 0 ? void 0 : data.meta) === null || _c === void 0 ? void 0 : _c.cliente) && data.meta.cliente !== 'Sin cliente') ||
                (((_d = data === null || data === void 0 ? void 0 : data.meta) === null || _d === void 0 ? void 0 : _d.subtitulo) && data.meta.subtitulo !== 'Informe de Inicio') ||
                ((_e = data === null || data === void 0 ? void 0 : data.meta) === null || _e === void 0 ? void 0 : _e.responsableProyecto) ||
                ((_f = data === null || data === void 0 ? void 0 : data.meta) === null || _f === void 0 ? void 0 : _f.pep);
            if (touched) {
                const ok = confirm('Se descartará el nuevo proyecto y se perderán los cambios. ¿Continuar?');
                if (!ok)
                    return;
            }
            onCancelNew && onCancelNew();
            return;
        }
        onBack && onBack();
    };
    const handleBack = () => {
        // Para nuevos, tratamos "volver" como cancelar (con confirmación)
        if (isNewDraft)
            return handleCancelNew();
        onBack && onBack();
    };
    const handleSave = async () => {
        const res = await onSave(data);
        setHasChanges(false);
        // Si era un nuevo proyecto, onSave ya nos ha llevado al dashboard y el componente se desmontará
        if (res && res.created)
            return;
        setViewMode('preview');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    // --- NUEVA FUNCIÓN: Cancelar edición ---
    const handleCancelEdit = () => {
        if (hasChanges) {
            const confirmDiscard = window.confirm("¿Descartar cambios no guardados y volver?");
            if (!confirmDiscard) return;
        }
        // Restaurar datos originales y volver a vista previa
        setData(project);
        setHasChanges(false);
        setViewMode('preview');
    };

    const updateMeta = (field, value) => {
        const META_LABELS = {
            titulo: 'Título',
            subtitulo: 'Subtítulo',
            cliente: 'Cliente',
            empresa: 'Empresa',
            estado: 'Estado',
            responsableProyecto: 'Responsable',
            ejecutorProyecto: 'Ingeniero Asignado',
            pep: 'PEP',
            clientLogoUrl: 'URL logo cliente',
            clientLogoData: 'Logo cliente',
            sharepointUrl: 'Carpeta SharePoint'
        };
        setData(prev => {
            const prevMeta = prev.meta || {};
            const fromVal = prevMeta[field];
            if (fromVal === value) return prev;

            const nextProject = { ...prev, meta: { ...prevMeta, [field]: value } };
            const label = META_LABELS[field] || field;

            return addActivityToProject(
                nextProject,
                `${label}: "${(fromVal ?? '')}" → "${(value ?? '')}"`,
                'meta'
            );
        });
        setHasChanges(true);
    };
    // --- Logos de cliente (persistentes en localStorage) ---
    const getClientLogoMap = () => {
        try {
            return JSON.parse(localStorage.getItem('clientLogoMap') || '{}');
        }
        catch (_a) {
            return {};
        }
    };
    const setClientLogoMap = (next) => {
        try {
            localStorage.setItem('clientLogoMap', JSON.stringify(next || {}));
        }
        catch (_a) { }
    };
    const handleClienteChange = (value) => {
        const v = (value || '').trim();
        updateMeta('cliente', value);
        // Si el proyecto aún no tiene logo, y existe uno guardado para ese cliente, lo aplica automáticamente.
        const hasLogo = !!getClientLogoSrc(data);
        if (!hasLogo && v) {
            const map = getClientLogoMap();
            if (map[v])
                updateMeta('clientLogoData', map[v]);
        }
    };
    const handleClientLogoUpload = (file) => {
        if (!file)
            return;
        if (!file.type || !file.type.startsWith('image/'))
            return;
        const reader = new FileReader();
        reader.onload = (e) => {
            var _a;
            const dataUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            if (!dataUrl)
                return;
            updateMeta('clientLogoData', dataUrl);
            updateMeta('clientLogoUrl', '');
            const cliente = (data.meta.cliente || '').trim();
            if (cliente) {
                const map = getClientLogoMap();
                map[cliente] = dataUrl; // guarda para reutilizar en futuros proyectos
                setClientLogoMap(map);
            }
        };
        reader.readAsDataURL(file);
    };
    const handleClientLogoRemove = () => {
        updateMeta('clientLogoData', '');
        updateMeta('clientLogoUrl', '');
        // Nota: no borramos el mapa global para no perder logos reutilizables.
    };
    const editLogoSrc = getClientLogoSrc(data);
    const [editLogoFailed, setEditLogoFailed] = React.useState(false);
    React.useEffect(() => {
        setEditLogoFailed(false);
    }, [data && data.id, editLogoSrc]);
    const createsCircularDependency = (tasks, taskId, dependsOnId) => {
        const currentId = String(taskId);
        let cursor = normalizeDependencyValue(dependsOnId);
        const seen = new Set([currentId]);
        while (cursor) {
            if (seen.has(cursor))
                return true;
            seen.add(cursor);
            const nextTask = tasks.find(t => String(t.id) === cursor);
            cursor = nextTask ? normalizeDependencyValue(nextTask.dependsOn) : null;
        }
        return false;
    };
    const updateTask = (id, field, value) => {
        const TASK_LABELS = {
            area: 'Área',
            tarea: 'Tarea',
            estado: 'Estado',
            prioridad: 'Prioridad',
            detalles: 'Detalles',
            fechaInicio: 'Fecha inicio',
            fechaFin: 'Fecha fin',
            fechaLimite: 'Fecha límite',
            dependsOn: 'Dependencia',
            asignadoA: 'Asignado a'
        };
        setData(prev => {
            const prevTasks = Array.isArray(prev.tasks) ? prev.tasks : [];
            let nextValue = value;
            if (field === 'dependsOn') {
                nextValue = normalizeDependencyValue(value);
                if (nextValue && String(nextValue) === String(id)) {
                    alert('Una tarea no puede depender de si misma.');
                    return prev;
                }
                if (nextValue && !prevTasks.some(t => String(t.id) === String(nextValue)))
                    nextValue = null;
                if (nextValue && createsCircularDependency(prevTasks, id, nextValue)) {
                    alert('No se puede crear esa dependencia porque generaria un ciclo.');
                    return prev;
                }
            }
            const targetTask = prevTasks.find(t => String(t.id) === String(id));
            const fromVal = targetTask ? targetTask[field] : undefined;

            const nextTasks = prevTasks.map(t => {
                if (String(t.id) !== String(id)) return t;

                const updated = field === 'dependsOn'
                    ? { ...t, dependsOn: nextValue || null }
                    : { ...t, [field]: nextValue };
                if (field === 'dependsOn') {
                    const idx = buildTaskIndex(prevTasks);
                    const blocked = isTaskBlocked(updated, idx);
                    if (blocked && normalizeEstado(updated.estado) !== 'Completado')
                        updated.estado = 'Pendiente';
                }
                return updated;
            });

            let nextProject = { ...prev, tasks: nextTasks };

            if (fromVal !== nextValue) {
                const label = TASK_LABELS[field] || field;
                const taskName = (targetTask && (targetTask.tarea || targetTask.detalles || targetTask.id)) ? (targetTask.tarea || targetTask.detalles || targetTask.id) : String(id);
                nextProject = addActivityToProject(
                    nextProject,
                    `Tarea "${taskName}": ${label}: "${(fromVal ?? '')}" → "${(nextValue ?? '')}"`,
                    'task'
                );
            }
            return nextProject;
        });
        setHasChanges(true);
    };
    const addTask = () => {
        setData(prev => {
            const prevTasks = Array.isArray(prev.tasks) ? prev.tasks : [];
            const newTask = {
                id: 't_' + Date.now(),
                area: 'General',
                tarea: 'Nueva tarea',
                estado: 'Pendiente',
                prioridad: 'Media',
                detalles: 'Descripción...',
                fechaInicio: '',
                fechaFin: '',
                fechaLimite: '',
                iconType: 'monitor',
                dependsOn: null
            };
            let nextProject = { ...prev, tasks: [...prevTasks, newTask] };
            nextProject = addActivityToProject(nextProject, `Nueva tarea añadida: "${newTask.tarea}"`, 'task');
            return nextProject;
        });
        setHasChanges(true);
    };
    const deleteTask = (id) => {
        if (!confirm('¿Borrar tarea?')) return;
        setData(prev => {
            const prevTasks = Array.isArray(prev.tasks) ? prev.tasks : [];
            const targetTask = prevTasks.find(t => String(t.id) === String(id));
            const taskName = targetTask ? (targetTask.tarea || targetTask.detalles || targetTask.id) : String(id);
            const nextTasks = prevTasks
                .filter(t => String(t.id) !== String(id))
                .map(t => String(t.dependsOn || '') === String(id) ? { ...t, dependsOn: null } : t);
            let nextProject = { ...prev, tasks: nextTasks };
            nextProject = addActivityToProject(nextProject, `Tarea eliminada: "${taskName}"`, 'task');
            return nextProject;
        });
        setHasChanges(true);
    };

// --- FUNCIONES NUEVAS PARA SUBTAREAS (VERSIÓN 2: Edición directa) ---
    const addSubtask = (taskId) => {
        // Añadimos directamente una subtarea vacía para editarla en pantalla
        setData(prev => {
            const nextTasks = prev.tasks.map(t => {
                if (t.id !== taskId) return t;
                const subs = t.subtasks || [];
                return { ...t, subtasks: [...subs, { id: Date.now(), text: "", done: false }] };
            });
            return { ...prev, tasks: nextTasks };
        });
        setHasChanges(true);
    };

    const updateSubtask = (taskId, subId, newText) => {
        // Guarda lo que escribes en la subtarea
        setData(prev => {
            const nextTasks = prev.tasks.map(t => {
                if (t.id !== taskId) return t;
                const subs = (t.subtasks || []).map(s =>
                    s.id === subId ? { ...s, text: newText } : s
                );
                return { ...t, subtasks: subs };
            });
            return { ...prev, tasks: nextTasks };
        });
        setHasChanges(true);
    };

    const toggleSubtask = (taskId, subId) => {
        setData(prev => {
            const nextTasks = prev.tasks.map(t => {
                if (t.id !== taskId) return t;
                const subs = (t.subtasks || []).map(s =>
                    s.id === subId ? { ...s, done: !s.done } : s
                );
                return { ...t, subtasks: subs };
            });
            return { ...prev, tasks: nextTasks };
        });
        setHasChanges(true);
    };

    const deleteSubtask = (taskId, subId) => {
        // Aquí sí mantenemos la confirmación para evitar borrar por error
        if(!confirm("¿Borrar subtarea?")) return;
        setData(prev => {
            const nextTasks = prev.tasks.map(t => {
                if (t.id !== taskId) return t;
                const subs = (t.subtasks || []).filter(s => s.id !== subId);
                return { ...t, subtasks: subs };
            });
            return { ...prev, tasks: nextTasks };
        });
        setHasChanges(true);
    };
    // ---------------------------------------
    // EXPORTACIONES
    const exportHTML = () => {
        const finalHTML = getClientTemplate(data);
        const blob = new Blob([finalHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${data.meta.titulo.replace(/\s+/g, '_')}_ENTREGABLE.html`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShowExportMenu(false);
    };
    const exportCSV = () => {
        const headers = ["Area;Tarea;Estado;Detalles;Fecha Inicio;Fecha Limite"];
        const rows = data.tasks.map(item => { var _a, _b; return `"${item.area}";"${item.tarea}";"${item.estado}";"${item.detalles}";"${(_a = item.fechaInicio) !== null && _a !== void 0 ? _a : ""}";"${(_b = item.fechaLimite) !== null && _b !== void 0 ? _b : ""}"`; });
        const csvContent = "\uFEFF" + [headers, ...rows].join("\n");
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${data.meta.titulo.replace(/\s+/g, '_')}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShowExportMenu(false);
    };
    const printPDF = () => {
        setViewMode('preview');
        setShowExportMenu(false);
        setTimeout(() => window.print(), 500);
    };
    return (React.createElement("div", { className: "min-h-screen bg-gray-50 pb-20 relative project-editor-screen" },
        showAudit && (React.createElement("div", { className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9998] no-print", onClick: () => setShowAudit(false) },
            React.createElement("div", { className: "bg-white w-[min(760px,calc(100vw-24px))] max-h-[80vh] rounded-2xl shadow-2xl border border-gray-200 overflow-hidden", onClick: (e) => e.stopPropagation() },
                React.createElement("div", { className: "px-5 py-4 border-b flex items-center justify-between" },
                    React.createElement("div", { className: "min-w-0" },
                        React.createElement("div", { className: "text-sm text-gray-500" }, "Historial de cambios"),
                        React.createElement("div", { className: "text-lg font-semibold text-gray-900" }, "Actividad")
                    ),
                    React.createElement("button", { type: "button", onClick: () => setShowAudit(false), className: "h-9 w-9 rounded-full hover:bg-gray-100 flex items-center justify-center", "aria-label": "Cerrar" },
                        React.createElement("i", { className: "fas fa-times" })
                    )
                ),
                React.createElement("div", { className: "p-5 overflow-auto max-h-[calc(80vh-72px)]" },
                    activityList.length === 0
                        ? React.createElement("div", { className: "text-sm text-gray-500" }, "Sin actividad todavía.")
                        : React.createElement("ul", { className: "space-y-3" },
                            activityList.map((log) => React.createElement("li", { key: log.id || String(log.ts || Math.random()), className: "text-sm" },
                                React.createElement("div", { className: "flex items-start justify-between gap-3" },
                                    React.createElement("div", { className: "min-w-0" },
                                        React.createElement("div", { className: "text-gray-900 break-words" },
                                            React.createElement("span", { className: "font-semibold" }, log.user || 'Usuario'),
                                            ": ",
                                            log.message || ''
                                        ),
                                        React.createElement("div", { className: "text-xs text-gray-500 mt-1" }, new Date(log.ts || Date.now()).toLocaleString('es-ES'))
                                    )
                                )
                            )),
                        )
                )
            )
        )),

        showToast && (React.createElement("div", { className: "fixed top-[calc(env(safe-area-inset-top)+16px)] left-1/2 -translate-x-1/2 bg-gray-900/80 text-white px-5 py-3 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 flex items-center gap-3 z-50 z-[9999] pointer-events-none" },
            React.createElement("div", { className: "bg-green-500 rounded-full p-1" },
                React.createElement("i", { className: "fas fa-check text-white text-xs" })),
            React.createElement("div", null,
                React.createElement("h4", { className: "font-bold text-sm" }, "Guardado"),
                React.createElement("p", { className: "text-xs text-gray-400" }, "Listo para exportar.")))),
        React.createElement("div", { className: "bg-white border-b border-gray-200 sticky top-0 z-20 px-6 py-3 flex justify-between items-center shadow-sm no-print" },
            React.createElement("div", { className: "flex items-center gap-4" },
                React.createElement("button", { onClick: handleBack, className: "text-gray-500 hover:text-gray-800 flex items-center gap-2 text-sm font-medium" },
                    React.createElement("i", { className: "fas fa-arrow-left" }),
                    " ",
                    React.createElement("span", { className: "hidden sm:inline" }, "Dashboard")),
                React.createElement("div", { className: "h-6 w-px bg-gray-200" }),
                React.createElement("button", { onClick: () => setViewMode(viewMode === 'edit' ? 'preview' : 'edit'), className: `px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${viewMode === 'edit'
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        : 'bg-blue-600 text-white hover:bg-blue-700'}`, title: viewMode === 'edit' ? 'Ver vista previa' : 'Editar proyecto' },
                    React.createElement("i", { className: `fas ${viewMode === 'edit' ? 'fa-eye' : 'fa-pen'}` }),
                    React.createElement("span", { className: "hidden sm:inline" }, viewMode === 'edit' ? 'Vista previa' : 'Editar proyecto')),
                viewMode === 'edit' && React.createElement("div", { className: "project-edit-toolbar-title" },
                    React.createElement("strong", null, "Editar proyecto"),
                    React.createElement("span", null, data.meta.titulo || "Proyecto"))),
            React.createElement("div", { className: "flex gap-3 relative" },
                isNewDraft && (React.createElement("button", { onClick: handleCancelNew, className: "px-4 py-2 rounded-lg text-sm font-medium bg-slate-800 hover:bg-slate-700 text-white/90 border border-white/10 transition", title: "Descartar el nuevo proyecto" }, "Cancelar")),

                (!isNewDraft && viewMode === 'edit') && (React.createElement("button", { onClick: handleCancelEdit, className: "px-4 py-2 rounded-lg text-sm font-medium bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 transition shadow-sm", title: "Descartar cambios y volver" }, "Cancelar")),

                React.createElement("button", { onClick: handleSave, disabled: isSaving, className: `px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${hasChanges ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}` },
                    isSaving ? React.createElement("i", { className: "fas fa-circle-notch fa-spin" }) : React.createElement("i", { className: "fas fa-save" }),
                    React.createElement("span", { className: "hidden sm:inline" }, isSaving ? 'Guardando...' : 'Guardar Progreso')),
                React.createElement("button", { onClick: () => setShowAudit(true), className: "px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm" },
                        React.createElement("i", { className: "fas fa-history" }),
                        " ",
                        React.createElement("span", { className: "hidden sm:inline" }, "Historial")),
                        React.createElement("button", {
  type: "button",
  onClick: () => { window.location.hash = `#/wiki/${encodeURIComponent(String((data && data.id) || ''))}`; },
  className: "px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm"
},
  React.createElement("i", { className: "fas fa-book" }),
  " ",
  React.createElement("span", { className: "hidden sm:inline" }, "Wiki")
),

                React.createElement("div", { className: "relative" },
                    React.createElement("button", { onClick: () => setShowExportMenu(!showExportMenu), className: "px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm" },
                        React.createElement("i", { className: "fas fa-share-square" }),
                        " ",
                        React.createElement("span", { className: "hidden sm:inline" }, "Exportar"),
                        " ",
                        React.createElement("i", { className: "fas fa-chevron-down text-xs" })),
                    showExportMenu && (React.createElement("div", { className: "absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 z-50 overflow-hidden" },
                        React.createElement("button", { onClick: exportHTML, className: "w-full text-left px-4 py-3 hover:bg-purple-50 text-sm text-gray-700 flex items-center gap-3 border-b border-gray-50" },
                            React.createElement("div", { className: "w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center" },
                                React.createElement("i", { className: "fas fa-code" })),
                            React.createElement("div", null,
                                React.createElement("p", { className: "font-medium" }, "Web Cliente (HTML)"),
                                React.createElement("p", { className: "text-xs text-gray-400" }, "S\u00F3lo lectura, incluye logo"))),
                        React.createElement("button", { onClick: exportCSV, className: "w-full text-left px-4 py-3 hover:bg-green-50 text-sm text-gray-700 flex items-center gap-3 border-b border-gray-50" },
                            React.createElement("div", { className: "w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center" },
                                React.createElement("i", { className: "fas fa-file-csv" })),
                            React.createElement("div", null,
                                React.createElement("p", { className: "font-medium" }, "Excel (CSV)"),
                                React.createElement("p", { className: "text-xs text-gray-400" }, "Para hojas de c\u00E1lculo"))),
                        React.createElement("button", { onClick: printPDF, className: "w-full text-left px-4 py-3 hover:bg-red-50 text-sm text-gray-700 flex items-center gap-3" },
                            React.createElement("div", { className: "w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center" },
                                React.createElement("i", { className: "fas fa-file-pdf" })),
                            React.createElement("div", null,
                                React.createElement("p", { className: "font-medium" }, "PDF Oficial"),
                                React.createElement("p", { className: "text-xs text-gray-400" }, "Impresi\u00F3n optimizada")))))
                ))),
        viewMode === 'preview' ? (React.createElement(ProjectDetailDashboard, {
            project: data,
            onEdit: () => setViewMode('edit'),
            onAddTask: addTask,
            onAddTimeEntry: onAddTimeEntry,
            onEditTimeEntry: onEditTimeEntry,
            onDeleteTimeEntry: onDeleteTimeEntry,
            onPrint: printPDF
        })) : (React.createElement("div", { className: "max-w-6xl mx-auto mt-8 px-6 space-y-8" },
            React.createElement("div", { className: "bg-white p-6 rounded-xl shadow-sm border border-gray-200" },
                React.createElement("div", { className: "flex justify-between items-center mb-6 pb-2 border-b" },
                    React.createElement("h3", { className: "text-sm font-bold text-gray-500 uppercase tracking-wider" }, "Datos del Proyecto"),
                    React.createElement("span", { className: "text-xs text-gray-400" },
                        "ID: ",
                        data.id)),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8" },
                    React.createElement("div", { className: "space-y-4" },
                        React.createElement("div", null,
                            React.createElement("label", { className: "block text-xs font-semibold text-gray-600 uppercase mb-1" }, "T\u00EDtulo"),
                            React.createElement("input", { type: "text", className: "w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow", value: data.meta.titulo, onChange: (e) => updateMeta('titulo', e.target.value), placeholder: "Ej: Renovaci\u00F3n Sede Central" })),
                        React.createElement("div", null,
                            React.createElement("label", { className: "block text-xs font-semibold text-gray-600 uppercase mb-1" }, "Subt\u00EDtulo / Fase"),
                            React.createElement("input", { type: "text", className: "w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow", value: data.meta.subtitulo, onChange: (e) => updateMeta('subtitulo', e.target.value), placeholder: "Ej: Fase 1 - Cableado Estructurado" })),
                        React.createElement("div", null,
                            React.createElement("label", { className: "block text-xs font-semibold text-gray-600 uppercase mb-1" }, "Cliente"),
                            React.createElement("input", { type: "text", className: "w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow", value: data.meta.cliente || '', onChange: (e) => handleClienteChange(e.target.value), placeholder: "Ej: RTVE / EITB / Mediaset..." })),
                        React.createElement("div", null,
                            React.createElement("label", { className: "block text-xs font-semibold text-gray-600 uppercase mb-1" }, "Responsable de Proyecto"),
                            React.createElement("input", { type: "text", className: "w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow", value: data.meta.responsableProyecto || '', onChange: (e) => updateMeta('responsableProyecto', e.target.value), placeholder: "" })),
                            React.createElement("div", { className: "mt-4" },
    React.createElement("label", { className: "block text-xs font-semibold text-gray-600 uppercase mb-1" }, "Responsable de Ejecución / Técnico"),
    React.createElement("input", {
        type: "text",
        className: "w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow",
        value: data.meta.ejecutorProyecto || '',
        onChange: (e) => updateMeta('ejecutorProyecto', e.target.value),
        placeholder: "Quién ejecuta la obra..."
    })
),
                        React.createElement("div", { className: "internal-only" },
                            React.createElement("label", { className: "block text-xs font-semibold text-gray-600 uppercase mb-1" }, "PEP"),
                            React.createElement("input", { type: "text", className: "w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow", value: data.meta.pep || '', onChange: (e) => updateMeta('pep', e.target.value), placeholder: "Ej: PEP-2026-001" })),
                        React.createElement("div", null,
    React.createElement("div", null,
        React.createElement("label", { className: "block text-xs font-semibold text-gray-600 uppercase mb-1" }, "Carpeta SharePoint"),
        React.createElement("div", { className: "relative" },
            React.createElement("i", { className: "fas fa-folder-open absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" }),
            React.createElement("input", {
                type: "url",
                className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition-shadow",
                value: data.meta.sharepointUrl || '',
                onChange: (e) => updateMeta('sharepointUrl', e.target.value),
                placeholder: "https://unitecnic.sharepoint.com/..."
            })
        )
    ),
                            React.createElement("label", { className: "block text-xs font-semibold text-gray-600 uppercase mb-1" }, "Logo del cliente"),
                            React.createElement("div", { className: "project-edit-logo-row" },
                                React.createElement("div", { className: "project-edit-logo-preview" },
                                    editLogoSrc && !editLogoFailed
                                        ? React.createElement("img", { src: editLogoSrc, alt: "Logo cliente", onError: () => setEditLogoFailed(true) })
                                        : React.createElement("span", null, getClientInitials(data))
                                ),
                                React.createElement("div", { className: "project-edit-logo-controls" },
                                    React.createElement("input", {
                                        type: "url",
                                        className: "w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow",
                                        value: data.meta.clientLogoUrl || '',
                                        onChange: (e) => updateMeta('clientLogoUrl', e.target.value),
                                        placeholder: "URL del logo del cliente"
                                    }),
                                    React.createElement("div", { className: "project-edit-logo-actions" },
                                        React.createElement("label", { className: "inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 cursor-pointer text-sm font-semibold text-gray-700 transition" },
                                            React.createElement("i", { className: "fas fa-upload" }),
                                            "Subir logo",
                                            React.createElement("input", { type: "file", accept: "image/*", className: "hidden", onChange: (e) => { var _a; return handleClientLogoUpload((_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0]); } })),
                                        editLogoSrc && (React.createElement("button", { type: "button", className: "inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 text-sm font-semibold text-gray-700 transition", onClick: handleClientLogoRemove, title: "Quitar logo" },
                                            React.createElement("i", { className: "fas fa-trash" }),
                                            "Quitar"))))),
                            React.createElement("p", { className: "text-xs text-gray-500 mt-2" }, "Puedes pegar una URL o subir una imagen. Si no hay logo, se mostrarán las iniciales del cliente.")),
                        React.createElement("div", null,
                            React.createElement("label", { className: "block text-xs font-semibold text-gray-600 uppercase mb-1" }, "Estado"),
                            React.createElement("select", { className: "w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white", value: normalizeProjectEstado(data.meta.estado), onChange: (e) => updateMeta('estado', e.target.value) },
                                React.createElement("option", { value: "En Ejecuci\u00F3n" }, "\u26A1 En Ejecuci\u00F3n (Activo)"),
                                React.createElement("option", { value: "En Pausa" }, "\u23F8 En Pausa"),
                                React.createElement("option", { value: "En Revisi\u00F3n" }, "\uD83D\uDD0E En Revisi\u00F3n"),
                                React.createElement("option", { value: "Completado" }, "\u2705 Completado (Hist\u00F3rico)")))),
                    React.createElement("div", { className: "space-y-4" }))),
            React.createElement("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" },
                React.createElement("div", { className: "px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center" },
                    React.createElement("h2", { className: "font-semibold text-gray-800" }, "Plan de Trabajo"),
                    React.createElement("button", { onClick: addTask, className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shadow-sm" },
                        React.createElement("i", { className: "fas fa-plus" }),
                        " Nueva Tarea")),
                React.createElement("div", { className: "overflow-auto", style: { maxHeight: "calc(100vh - 320px)" } },
                    React.createElement("table", { className: "w-full min-w-[1200px] text-left border-collapse" },
                        React.createElement("thead", null,
                            React.createElement("tr", { className: "bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200" },
                                React.createElement("th", { className: "px-6 py-3 font-semibold whitespace-nowrap min-w-[320px]" }, "\u00C1REA / TIPO"),
                                React.createElement("th", { className: "px-6 py-3 font-semibold whitespace-nowrap min-w-[280px]" }, "TAREA"),
                                React.createElement("th", { className: "px-6 py-3 font-semibold whitespace-nowrap min-w-[160px]" }, "ESTADO"),
                                React.createElement("th", { className: "px-6 py-3 font-semibold whitespace-nowrap min-w-[160px]" }, "PRIORIDAD"),
                                React.createElement("th", { className: "px-4 py-3 font-semibold whitespace-nowrap min-w-[200px] internal-only" }, "ASIGNADO A"),
React.createElement("th", { className: "px-6 py-3 font-semibold whitespace-nowrap min-w-[280px]" }, "DETALLES"),
                                React.createElement("th", { className: "px-6 py-3 font-semibold whitespace-nowrap min-w-[180px]" }, "FECHA INICIO"),
                                React.createElement("th", { className: "px-6 py-3 font-semibold whitespace-nowrap min-w-[180px]" }, "FECHA L\u00CDMITE"),
                                React.createElement("th", { className: "px-4 py-3 font-semibold text-center w-10" }))),
                        React.createElement("tbody", { className: "divide-y divide-gray-100 bg-white", onDragOver: handleTaskTableDragOver, onDrop: handleTaskTableDrop }, data.tasks.map((task, idx) => (React.createElement("tr", { key: task.id, onDragOver: (e) => handleTaskRowDragOver(e, task.id), onDrop: (e) => handleTaskRowDrop(e, task.id), className: `hover:bg-blue-50/30 transition-colors align-top group ${dragOverTaskId === task.id ? 'ring-2 ring-[color:rgba(8,136,200,0.25)]' : ''} ${draggingTaskId === task.id ? 'opacity-60' : ''}` },
                            React.createElement("td", { className: "px-6 py-4 min-w-[320px]" },
                                React.createElement("div", { className: "flex flex-col gap-2" },
                                    React.createElement("div", { className: "flex items-center gap-2" },
                                        React.createElement("span", { draggable: true, onDragStart: (e) => handleTaskDragStart(e, task.id), onDragEnd: handleTaskDragEnd, className: "task-drag-handle inline-flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 bg-white text-gray-400 hover:text-gray-700 hover:border-gray-300 cursor-grab active:cursor-grabbing", title: "Arrastra para reordenar" },
                                            React.createElement("i", { className: "fas fa-grip-vertical" })),
                                        React.createElement(IconPicker, { value: task.iconType, open: openIconPickerId === task.id, onToggle: () => setOpenIconPickerId(prev => prev === task.id ? null : task.id), onChange: (newId) => { updateTask(task.id, 'iconType', newId); setOpenIconPickerId(null); } }),
                                        React.createElement("input", { type: "text", className: "flex-1 border border-gray-200 rounded text-sm p-1.5 focus:ring-1 focus:ring-blue-500 outline-none font-medium", value: task.area, onChange: (e) => updateTask(task.id, 'area', e.target.value) }),
                                        React.createElement("div", { className: "project-dependency-field" },
                                            React.createElement("label", null, "Depende de"),
                                            React.createElement("select", { className: "project-dependency-select", value: task.dependsOn == null ? '' : String(task.dependsOn), onChange: (e) => updateTask(task.id, 'dependsOn', e.target.value || null) },
                                                React.createElement("option", { value: "" }, "Ninguna"),
                                                data.tasks
                                                    .filter(t => String(t.id) !== String(task.id))
                                                    .map(t => (React.createElement("option", { key: t.id, value: String(t.id) }, `${t.area || 'General'} - ${t.tarea || 'Tarea sin titulo'}`.slice(0, 90))))),
                                            React.createElement("small", null, "Esta tarea quedara bloqueada hasta que la tarea seleccionada este completada."),
                                            isTaskBlocked(task, taskIndex) && (React.createElement("span", { className: "inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200", title: "Bloqueada: la tarea previa no est\u00E1 completada" },
                                                React.createElement("i", { className: "fas fa-lock" }),
                                                " Bloqueada")))))),
React.createElement("td", { className: "px-6 py-4 min-w-[280px]" },
        // Tarea principal
        React.createElement("textarea", { rows: "2", className: "w-full border border-gray-200 rounded text-sm p-2 focus:ring-1 focus:ring-blue-500 outline-none resize-none bg-transparent w-full font-medium", value: task.tarea, onChange: (e) => updateTask(task.id, 'tarea', e.target.value) }),

        // ZONA DE SUBTAREAS
        React.createElement("div", { className: "subtasks-container" },
            (task.subtasks || []).map(sub => (
                React.createElement("div", { key: sub.id, className: "subtask-item" },
                    // Checkbox
                    React.createElement("input", { type: "checkbox", className: "subtask-checkbox", checked: !!sub.done, onChange: () => toggleSubtask(task.id, sub.id) }),

                    // AHORA ESTO ES UN INPUT EDITABLE
                    React.createElement("input", {
                        type: "text",
                        className: `subtask-input ${sub.done ? 'done' : ''}`,
                        value: sub.text,
                        placeholder: "Escribe la subtarea...",
                        onChange: (e) => updateSubtask(task.id, sub.id, e.target.value)
                    }),

                    // Botón borrar
                    React.createElement("button", { onClick: () => deleteSubtask(task.id, sub.id), className: "btn-del-subtask", title: "Borrar subtarea" },
                        React.createElement("i", { className: "fas fa-trash" })
                    )
                )
            )),
            React.createElement("button", { onClick: () => addSubtask(task.id), className: "btn-add-subtask" },
                React.createElement("i", { className: "fas fa-plus-circle" }), " Subtarea"
            )
        )
    ),
                            React.createElement("td", { className: "px-6 py-4 min-w-[160px]" },
                                React.createElement("select", { className: `w-full border rounded text-sm p-1.5 outline-none font-medium ${task.estado === 'Completado' ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                        : task.estado === 'En Curso' ? 'bg-amber-50 text-amber-700 border-amber-200'
                                            : 'bg-rose-50 text-rose-700 border-rose-200'}`, value: task.estado, onChange: (e) => {
                                        const newEstado = e.target.value;
                                        const blocked = isTaskBlocked(task, taskIndex);
                                        if (blocked && (newEstado === 'En Curso' || newEstado === 'Completado')) {
                                            alert('Esta tarea depende de otra aún no completada. Marca la tarea previa como Completado para poder iniciarla.');
                                            updateTask(task.id, 'estado', 'Pendiente');
                                            return;
                                        }
                                        updateTask(task.id, 'estado', newEstado);
                                    } },
                                    React.createElement("option", { value: "Pendiente" }, "Pendiente"),
                                    React.createElement("option", { value: "En Curso" }, "En Curso"),
                                    React.createElement("option", { value: "Completado" }, "Completado"))),
                                React.createElement("td", { className: "px-6 py-4 min-w-[160px]" },
  React.createElement("select", {
    className: `w-full border rounded text-sm p-1.5 outline-none font-medium ${
      (task.prioridad || 'Media') === 'Urgente' ? 'bg-rose-50 text-rose-700 border-rose-200'
      : (task.prioridad || 'Media') === 'Alta' ? 'bg-amber-50 text-amber-700 border-amber-200'
      : (task.prioridad || 'Media') === 'Baja' ? 'bg-slate-50 text-slate-700 border-slate-200'
      : 'bg-blue-50 text-blue-700 border-blue-200'
    }`,
    value: (task.prioridad || 'Media'),
    onChange: (e) => updateTask(task.id, 'prioridad', e.target.value)
  },
    React.createElement("option", { value: "Urgente" }, "Urgente"),
    React.createElement("option", { value: "Alta" }, "Alta"),
    React.createElement("option", { value: "Media" }, "Media"),
    React.createElement("option", { value: "Baja" }, "Baja")
  )
),

                                React.createElement("td", { className: "px-6 py-4 min-w-[200px] internal-only" },
                                React.createElement("input", { type: "text", className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500", value: task.asignadoA || '', onChange: (e) => updateTask(task.id, 'asignadoA', e.target.value), placeholder: "Asignado..." })),
React.createElement("td", { className: "px-6 py-4 min-w-[280px]" },
                                React.createElement("textarea", { rows: "2", className: "w-full border border-gray-200 rounded text-xs p-2 focus:ring-1 focus:ring-blue-500 outline-none resize-y text-gray-600", value: task.detalles, onChange: (e) => updateTask(task.id, 'detalles', e.target.value), placeholder: "A\u00F1adir notas..." })),
                            React.createElement("td", { className: "px-6 py-4 min-w-[180px]" },
                                React.createElement("input", { type: "date", className: "w-full border border-gray-200 rounded text-sm p-1.5 focus:ring-1 focus:ring-blue-500 outline-none text-center", value: toDateInputValue(task.fechaInicio), onChange: (e) => updateTask(task.id, 'fechaInicio', e.target.value) })),
                            React.createElement("td", { className: "px-6 py-4 min-w-[180px]" },
                                React.createElement("input", { type: "date", className: "w-full border border-gray-200 rounded text-sm p-1.5 focus:ring-1 focus:ring-blue-500 outline-none text-center", value: toDateInputValue(task.fechaLimite), onChange: (e) => updateTask(task.id, 'fechaLimite', e.target.value) })),
                            React.createElement("td", { className: "px-4 py-4 text-center align-middle" },
                                React.createElement("button", { onClick: () => deleteTask(task.id), className: "text-gray-300 hover:text-red-500 p-2 rounded transition-colors opacity-0 group-hover:opacity-100", title: "Eliminar" },
                                    React.createElement("i", { className: "fas fa-trash" }))))))))))))));
};

// --- COMPONENTE: DETALLE DE CARGA DE TRABAJO (CORREGIDO: SEPARA NOMBRES MULTIPLES) ---
const WorkloadView = ({ projects, onBack }) => {

    // LÓGICA DE CÁLCULO
    const workloadData = React.useMemo(() => {
        const map = {};

        projects.forEach(p => {
            if (String(p.meta?.estado) === 'Completado') return;
            const tasks = (p.tasks || []);
const idx = buildTaskIndex(tasks);
const activeTasks = tasks.filter(t => effectiveEstado(t, idx) !== 'Completado');


            activeTasks.forEach(t => {
                // 1. Obtenemos el texto crudo
                let raw = (t.asignadoA || '').trim();
                if (!raw) raw = "Sin asignar";

                // 2. MAGIA: Separamos por barras (/), comas (,) o " y "
                const names = raw.split(/[\/,;&]|\s+y\s+/).map(s => s.trim()).filter(Boolean);

                // Si al separar no queda nada, volvemos a "Sin Asignar"
                const finalNames = names.length > 0 ? names : ["Sin asignar"];

                // 3. Asignamos la tarea a CADA persona encontrada
                finalNames.forEach(personName => {
                    const key = personName;

                    if (!map[key]) {
                        map[key] = { name: key, totalTasks: 0, projectsMap: {} };
                    }
                    map[key].totalTasks++;

                    if (!map[key].projectsMap[p.id]) {
                        map[key].projectsMap[p.id] = {
                            id: p.id,
                            title: p.meta.titulo || 'Sin título',
                            client: p.meta.cliente || 'Varios',
                            tasks: []
                        };
                    }
                    // Evitamos duplicar la tarea visualmente si la misma persona sale 2 veces en el texto (raro, pero posible)
                    if (!map[key].projectsMap[p.id].tasks.some(existing => existing.id === t.id)) {
                        map[key].projectsMap[p.id].tasks.push(t);
                    }
                });
            });
        });

        return Object.values(map)
            .map(person => ({ ...person, projects: Object.values(person.projectsMap) }))
            .sort((a, b) => b.totalTasks - a.totalTasks);
    }, [projects]);

    // RENDERIZADO
    return (
        React.createElement("div", { className: "wl-view-container" },
            React.createElement("div", { className: "wl-header-sticky no-print" },
                React.createElement("button", { onClick: onBack, className: "btn-apple", style: { height: '36px', fontSize: '13px' } },
                    React.createElement("i", { className: "fas fa-arrow-left" }),
                    "Volver"
                ),
                React.createElement("div", { style: { width: '1px', height: '24px', background: 'var(--border)' } }),
                React.createElement("h2", { className: "wl-title" },
                    React.createElement("i", { className: "fas fa-users-cog", style: { color: 'var(--brand)' } }),
                    "Carga de Trabajo")
            ),

            React.createElement("div", { className: "max-w-7xl mx-auto p-6" },
                workloadData.length === 0
                ? React.createElement("div", { style: { textAlign: 'center', padding: '60px 0', color: 'var(--muted)' } },
                    React.createElement("i", { className: "fas fa-check-circle", style: { fontSize: '40px', marginBottom: '16px', opacity: 0.5 } }),
                    React.createElement("p", null, "No hay tareas pendientes asignadas.")
                  )
                : workloadData.map((person, idx) => (
                    React.createElement("div", { key: idx, className: "wl-person-card" },
                        React.createElement("div", { className: "wl-person-header" },
                            React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '16px' } },
                                React.createElement("div", { className: "wl-avatar-large" },
                                    person.name.charAt(0).toUpperCase()
                                ),
                                React.createElement("div", null,
                                    React.createElement("div", { className: "wl-person-name" }, person.name),
                                    React.createElement("div", { className: "wl-person-subtitle" },
                                        person.totalTasks === 1 ? "1 tarea activa" : `${person.totalTasks} tareas activas`
                                    )
                                )
                            ),
                            React.createElement("div", { className: `wl-load-badge ${person.totalTasks >= 5 ? 'high' : 'normal'}` },
                                person.totalTasks >= 5 ? "Carga Alta" : "Normal"
                            )
                        ),
                        React.createElement("div", { className: "wl-grid-projects" },
                            person.projects.map(proj => (
                                React.createElement("div", { key: proj.id, className: "wl-subcard", onClick: () => window.location.hash = `#/project/${proj.id}` },
                                    React.createElement("div", { className: "wl-proj-title", title: proj.title }, proj.title),
                                    React.createElement("div", { className: "wl-client-tag" },
                                        React.createElement("i", { className: "fas fa-building" }),
                                        proj.client
                                    ),
                                    React.createElement("div", null,
                                        [...proj.tasks]
  .sort((a, b) => {
    const w = (x) => {
      const p = (x?.prioridad || 'Media').toString().toLowerCase();
      if (p === 'urgente') return 0;
      if (p === 'alta') return 1;
      if (p === 'media') return 2;
      if (p === 'baja') return 3;
      return 2;
    };
    const wa = w(a), wb = w(b);
    if (wa !== wb) return wa - wb;

    const da = a?.fechaLimite ? new Date(a.fechaLimite).getTime() : Number.POSITIVE_INFINITY;
    const db = b?.fechaLimite ? new Date(b.fechaLimite).getTime() : Number.POSITIVE_INFINITY;
    return da - db;
  })
  .map(t => (

                                            React.createElement("div", { key: t.id, className: "wl-task-row" },
                                                (() => {
  const est = (t.estado || '').toString().toLowerCase();
  const dotClass = est.includes('curso')
    ? 'task-dot task-dot--inprogress'   // En Curso
    : 'task-dot task-dot--pending';     // Pendiente

  return React.createElement("i", { className: `fas fa-circle ${dotClass}` });
})(),

                                                React.createElement("div", { className: "wl-task-text" },
                                                    t.tarea,
                                                   (() => {
  const pr = (t.prioridad || 'Media').toString().toLowerCase();
  const cls = pr === 'urgente' ? 'wl-prio-pill wl-prio-pill--urgente'
            : pr === 'alta'    ? 'wl-prio-pill wl-prio-pill--alta'
            : pr === 'baja'    ? 'wl-prio-pill wl-prio-pill--baja'
            :                   'wl-prio-pill wl-prio-pill--media';
  return React.createElement("span", { className: cls }, (t.prioridad || 'Media'));
})(),


                                                    t.fechaLimite && React.createElement("span", { className: "wl-date-warn" },
                                                        window.formatFechaES(t.fechaLimite)
                                                    )
                                                )
                                            )
                                        ))
                                    )
                                )
                            ))
                        )
                    )
                ))
            )
        )
    );
};

const WorkloadDashboardView = ({ projects, onBack }) => {
    const [projectStatusFilter, setProjectStatusFilter] = React.useState('Activos');
    const [personFilter, setPersonFilter] = React.useState('Todos');
    const [priorityFilter, setPriorityFilter] = React.useState('Todas');

    const workloadModel = React.useMemo(() => {
        const peopleMap = {};
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        let openTasks = 0;
        let criticalAssigned = 0;

        const includeProjectByStatus = (p) => {
            const estado = normalizeProjectEstado(p?.meta?.estado);
            if (projectStatusFilter === 'Todos') return true;
            if (projectStatusFilter === 'Activos') return estado !== 'Completado';
            return estado === projectStatusFilter;
        };
        const priorityWeight = (t) => {
            const pr = String(t?.prioridad || 'Media').toLowerCase();
            if (pr === 'urgente') return 0;
            if (pr === 'alta') return 1;
            if (pr === 'media') return 2;
            if (pr === 'baja') return 3;
            return 2;
        };

        (projects || []).filter(includeProjectByStatus).forEach(p => {
            const tasks = Array.isArray(p?.tasks) ? p.tasks : [];
            const idx = buildTaskIndex(tasks);
            tasks.forEach(t => {
                const est = effectiveEstado(t, idx);
                if (est === 'Completado') return;
                const pr = String(t?.prioridad || 'Media');
                if (priorityFilter !== 'Todas' && pr !== priorityFilter) return;

                openTasks += 1;
                const due = parseDateOnly(t.fechaLimite);
                const isCritical = ['urgente', 'alta'].includes(pr.toLowerCase());
                if (isCritical) criticalAssigned += 1;

                splitAssignees(t.asignadoA).forEach(name => {
                    if (personFilter !== 'Todos' && name !== personFilter) return;
                    if (!peopleMap[name]) {
                        peopleMap[name] = { name, totalTasks: 0, criticalTasks: 0, overdueTasks: 0, projectsMap: {}, tasks: [] };
                    }
                    const person = peopleMap[name];
                    person.totalTasks += 1;
                    if (isCritical) person.criticalTasks += 1;
                    if (due && due < today) person.overdueTasks += 1;
                    if (!person.projectsMap[p.id]) {
                        person.projectsMap[p.id] = {
                            id: p.id,
                            title: p?.meta?.titulo || 'Sin título',
                            client: p?.meta?.cliente || 'Sin cliente',
                            tasks: []
                        };
                    }
                    const taskItem = {
                        ...t,
                        projectId: p.id,
                        projectTitle: p?.meta?.titulo || 'Sin título',
                        client: p?.meta?.cliente || 'Sin cliente',
                        isCritical,
                        isOverdue: !!(due && due < today)
                    };
                    person.projectsMap[p.id].tasks.push(taskItem);
                    person.tasks.push(taskItem);
                });
            });
        });

        const peopleRaw = Object.values(peopleMap).sort((a, b) => b.totalTasks - a.totalTasks);
        const maxTasks = Math.max(0, ...peopleRaw.map(p => p.totalTasks));
        const capacity = Math.max(5, Math.ceil(Math.max(1, maxTasks) / 5) * 5);
        const people = peopleRaw.map(person => {
            const pct = Math.min(140, Math.round((person.totalTasks / capacity) * 100));
            const state = pct >= 100 ? 'Sobrecargado' : pct >= 75 ? 'Alta carga' : pct >= 35 ? 'Carga normal' : 'Disponible';
            const tone = pct >= 100 ? 'over' : pct >= 75 ? 'high' : pct >= 35 ? 'normal' : 'available';
            const projectsList = Object.values(person.projectsMap).map(project => ({
                ...project,
                tasks: [...project.tasks].sort((a, b) => {
                    const w = priorityWeight(a) - priorityWeight(b);
                    if (w !== 0) return w;
                    return (parseDateOnly(a.fechaLimite) || 9999999999999) - (parseDateOnly(b.fechaLimite) || 9999999999999);
                })
            }));
            return { ...person, pct, state, tone, projects: projectsList };
        });

        const overloaded = people.filter(p => p.tone === 'over');
        const highLoad = people.filter(p => p.tone === 'high' || p.tone === 'over');
        const available = people.filter(p => p.tone === 'available');
        const avgLoad = people.length ? Math.round(people.reduce((sum, p) => sum + p.pct, 0) / people.length) : 0;
        const spread = people.length > 1 ? Math.max(...people.map(p => p.pct)) - Math.min(...people.map(p => p.pct)) : 0;
        const busiest = people[0] || null;
        const leastBusy = [...people].reverse().find(p => p.tone === 'available') || people[people.length - 1] || null;
        const allPeopleNames = Array.from(new Set((projects || []).flatMap(p => (p.tasks || []).flatMap(t => splitAssignees(t.asignadoA))))).sort((a, b) => a.localeCompare(b, 'es'));

        const alerts = [];
        overloaded.forEach(p => alerts.push(`${p.name} está al ${p.pct}% de carga.`));
        if (!overloaded.length && highLoad.length) alerts.push(`${highLoad[0].name} concentra una carga elevada.`);
        if (spread >= 55 && people.length > 1) alerts.push('Hay mucha diferencia de carga entre miembros del equipo.');
        if (available.length) alerts.push(`${available.map(p => p.name).slice(0, 2).join(' y ')} ${available.length === 1 ? 'tiene' : 'tienen'} disponibilidad.`);
        const criticalHigh = highLoad.find(p => p.criticalTasks > 0);
        if (criticalHigh) alerts.push(`Existen tareas críticas asignadas a ${criticalHigh.name}, que ya tiene carga alta.`);

        const recommendations = [];
        if (busiest && leastBusy && busiest.name !== leastBusy.name && busiest.totalTasks - leastBusy.totalTasks >= 2) {
            recommendations.push(`Redistribuir tareas desde ${busiest.name} hacia ${leastBusy.name}.`);
        }
        if (criticalHigh) recommendations.push(`Revisar si las tareas críticas de ${criticalHigh.name} pueden priorizarse o moverse.`);
        if (available.length) recommendations.push(`Asignar nuevas tareas a personas con disponibilidad: ${available.map(p => p.name).slice(0, 3).join(', ')}.`);
        if (highLoad.length) recommendations.push(`Evitar asignar más tareas a ${highLoad.map(p => p.name).slice(0, 2).join(' y ')} hasta equilibrar la carga.`);
        if (!recommendations.length) recommendations.push('La carga del equipo está equilibrada. Mantener el reparto actual.');

        return { people, allPeopleNames, capacity, openTasks, criticalAssigned, avgLoad, overloaded, available, alerts, recommendations };
    }, [projects, projectStatusFilter, personFilter, priorityFilter]);

    const kpis = [
        { label: 'Personas activas', value: workloadModel.people.length, note: 'Con tareas abiertas', icon: 'fa-user-group', tone: 'blue' },
        { label: 'Tareas abiertas', value: workloadModel.openTasks, note: 'Pendientes o en curso', icon: 'fa-list-check', tone: 'cyan' },
        { label: 'Carga media', value: `${workloadModel.avgLoad}%`, note: 'Media del equipo', icon: 'fa-gauge-high', tone: 'green' },
        { label: 'Sobrecargadas', value: workloadModel.overloaded.length, note: 'Personas al 100% o más', icon: 'fa-triangle-exclamation', tone: 'red' },
        { label: 'Disponibles', value: workloadModel.available.length, note: 'Con margen de asignación', icon: 'fa-circle-check', tone: 'green' },
        { label: 'Críticas asignadas', value: workloadModel.criticalAssigned, note: 'Urgentes o altas', icon: 'fa-bolt', tone: 'amber' }
    ];

    return (
        <div className="workload-page">
            <section className="workload-hero">
                <div className="workload-hero-main">
                    <button onClick={onBack} className="workload-back no-print" title="Volver"><i className="fas fa-arrow-left"></i><span>Volver</span></button>
                    <div><h1>Carga de trabajo</h1><p>Distribución de tareas, disponibilidad y equilibrio del equipo.</p></div>
                </div>
                <div className="workload-filters no-print">
                    <label><span>Estado</span><select value={projectStatusFilter} onChange={e => setProjectStatusFilter(e.target.value)}><option value="Activos">Activos</option><option value="Todos">Todos</option><option value="En Ejecución">En ejecución</option><option value="En Revisión">En revisión</option><option value="En Pausa">En pausa</option><option value="Completado">Completados</option></select></label>
                    <label><span>Persona</span><select value={personFilter} onChange={e => setPersonFilter(e.target.value)}><option value="Todos">Todos</option>{workloadModel.allPeopleNames.map(name => <option key={name} value={name}>{name}</option>)}</select></label>
                    <label><span>Prioridad</span><select value={priorityFilter} onChange={e => setPriorityFilter(e.target.value)}><option value="Todas">Todas</option><option value="Urgente">Urgente</option><option value="Alta">Alta</option><option value="Media">Media</option><option value="Baja">Baja</option></select></label>
                </div>
            </section>

            {workloadModel.people.length === 0 ? (
                <div className="workload-empty"><i className="fas fa-chart-simple"></i><h2>No hay datos suficientes para calcular la carga de trabajo.</h2><p>Añade tareas asignadas a usuarios para visualizar la distribución del equipo.</p></div>
            ) : (
                <div className="workload-shell">
                    <section className="workload-kpi-grid">{kpis.map(kpi => <article className={`workload-kpi workload-kpi--${kpi.tone}`} key={kpi.label}><i className={`fas ${kpi.icon}`}></i><div><strong>{kpi.value}</strong><span>{kpi.label}</span><small>{kpi.note}</small></div></article>)}</section>
                    <section className="workload-layout">
                        <article className="workload-panel workload-panel--main">
                            <div className="workload-panel-head"><div><span>Equipo</span><h2>Carga por persona</h2></div><small>Capacidad de referencia: {workloadModel.capacity} tareas</small></div>
                            <div className="workload-person-list">{workloadModel.people.map(person => <button className={`workload-person-row workload-person-row--${person.tone}`} key={person.name} onClick={() => setPersonFilter(person.name)}><div className="workload-person-id"><span>{person.name.charAt(0).toUpperCase()}</span><div><strong>{person.name}</strong><small>{person.totalTasks} tarea{person.totalTasks === 1 ? '' : 's'} abiertas · {person.projects.length} proyecto{person.projects.length === 1 ? '' : 's'}</small></div></div><div className="workload-person-load"><div><strong>{person.pct}%</strong><span>{person.state}</span></div><div className="workload-bar"><span style={{ width: `${Math.min(100, person.pct)}%` }}></span></div></div></button>)}</div>
                        </article>
                        <aside className="workload-side">
                            <article className="workload-panel"><div className="workload-panel-head"><div><span>Control</span><h2>Alertas de carga</h2></div></div><div className="workload-alert-list">{workloadModel.alerts.length ? workloadModel.alerts.map((alert, i) => <div className="workload-alert" key={i}><i className="fas fa-circle-exclamation"></i><span>{alert}</span></div>) : <div className="workload-positive"><i className="fas fa-circle-check"></i><span>La carga del equipo está equilibrada.</span></div>}</div></article>
                            <article className="workload-panel"><div className="workload-panel-head"><div><span>Decisión</span><h2>Recomendaciones</h2></div></div><div className="workload-rec-list">{workloadModel.recommendations.map((rec, i) => <div className="workload-rec" key={i}><i className="fas fa-arrow-right"></i><span>{rec}</span></div>)}</div></article>
                        </aside>
                    </section>
                    <section className="workload-panel"><div className="workload-panel-head"><div><span>Distribución</span><h2>Ranking de carga</h2></div></div><div className="workload-ranking">{workloadModel.people.map(person => <div className={`workload-rank-row workload-rank-row--${person.tone}`} key={person.name}><span>{person.name}</span><div className="workload-bar"><span style={{ width: `${Math.min(100, person.pct)}%` }}></span></div><strong>{person.pct}%</strong></div>)}</div></section>
                    <section className="workload-panel"><div className="workload-panel-head"><div><span>Detalle</span><h2>Detalle por persona</h2></div></div><div className="workload-detail-grid">{workloadModel.people.map(person => <article className={`workload-detail-card workload-detail-card--${person.tone}`} key={person.name}><div className="workload-detail-top"><div><strong>{person.name}</strong><span>{person.state}</span></div><small>{person.pct}%</small></div><div className="workload-detail-meta"><span>{person.totalTasks} tareas</span><span>{person.projects.length} proyectos</span><span>{person.criticalTasks} críticas</span></div><div className="workload-project-list">{person.projects.slice(0, 4).map(project => <button key={project.id} onClick={() => window.location.hash = `#/project/${project.id}`}><strong>{project.title}</strong><span>{project.client} · {project.tasks.length} tarea{project.tasks.length === 1 ? '' : 's'}</span></button>)}</div></article>)}</div></section>
                </div>
            )}
        </div>
    );
};

// --- COMPONENTE: VISTA DETALLADA DE ALERTAS (FINAL: Bloqueos + Rojas + Próximos) ---
const AlertsView = ({ projects, onBack }) => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [clientFilter, setClientFilter] = React.useState('Todos');

    const normClient = (p) => ((p.meta && p.meta.cliente) ? p.meta.cliente : 'Sin cliente').trim() || 'Sin cliente';
    const clients = React.useMemo(() =>
        Array.from(new Set(projects.map(normClient))).sort((a, b) => a.localeCompare(b, 'es')),
    [projects]);

    const filteredProjects = React.useMemo(() => {
        return projects.filter(p => {
            const matchesClient = clientFilter === 'Todos' || normClient(p) === clientFilter;
            const q = (searchTerm || '').toString().trim().toLowerCase();
            if (!q) return matchesClient;
            const m = (p && p.meta) ? p.meta : {};
            const hay = ((m.titulo || '') + ' ' + (m.subtitulo || '') + ' ' + (m.cliente || '') + ' ' + (m.pep || '')).toLowerCase();
            return matchesClient && hay.includes(q);
        });
    }, [projects, clientFilter, searchTerm]);

    const alertsData = React.useMemo(() => {
        const blockedProjects = [];
        const redProjects = [];
        const urgentProjects = [];
        const upcomingProjects = [];


        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const nextWeek = new Date(today);
        nextWeek.setDate(today.getDate() + 7);

        const parseISO = (iso) => {
            if (!iso) return null;
            const t = String(iso).trim();
            if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) return null;
            const [y, m, d] = t.split('-').map(n => parseInt(n, 10));
            return new Date(y, (m || 1) - 1, d || 1);
        };

        filteredProjects.forEach(p => {
            const pState = (p.meta && p.meta.estado) ? p.meta.estado : 'En Ejecución';
            if (String(pState).toLowerCase() === 'completado') return;

            const tasks = p.tasks || [];
            const idx = buildTaskIndex(tasks);
            const blockedTasks = [];
            const urgentTasks = [];
            const upcomingTasks = [];


            let hasOverdue = false;

            tasks.forEach(t => {
                const est = effectiveEstado(t, idx);
                  if (est !== 'Completado' && String(t?.prioridad || '').toLowerCase() === 'urgente') {
    urgentTasks.push(t);
  }
                const lim = parseISO(t.fechaLimite);

                // A. Bloqueos
                if (est !== 'Completado' && isTaskBlocked(t, idx)) {
                    let blockerName = "Desconocido";
                    if(t.dependsOn) {
                        const parent = idx.get(t.dependsOn);
                        if(parent) blockerName = parent.tarea;
                    }
                    blockedTasks.push({ ...t, blockerName });
                }

                if (est !== 'Completado') {
                    // B. Vencidas (Rojo)
                    if (lim && lim < today) hasOverdue = true;
                    // C. Próximas (Cyan) - Próximos 7 días
                    if (lim && lim >= today && lim <= nextWeek) {
                        upcomingTasks.push(t);
                    }
                }
            });

            if (blockedTasks.length > 0) {
                blockedProjects.push({ id: p.id, title: p.meta.titulo, client: p.meta.cliente, items: blockedTasks });
            }

            if (urgentTasks.length > 0) {
  urgentProjects.push({ id: p.id, title: p.meta.titulo, client: p.meta.cliente, items: urgentTasks });
}

            if (upcomingTasks.length > 0) {
                // Ordenamos por fecha
                upcomingTasks.sort((a, b) => {
  const w = (x) => {
    const p = (x?.prioridad || 'Media').toString().toLowerCase();
    if (p === 'urgente') return 0;
    if (p === 'alta') return 1;
    if (p === 'media') return 2;
    if (p === 'baja') return 3;
    return 2;
  };
  const wa = w(a), wb = w(b);
  if (wa !== wb) return wa - wb;

  return (parseISO(a.fechaLimite) || 0) - (parseISO(b.fechaLimite) || 0);
});

                upcomingProjects.push({ id: p.id, title: p.meta.titulo, client: p.meta.cliente, items: upcomingTasks });
            }

            const stats = computeProjectStats(tasks);
            const tooMany = (stats.total >= 5 && (stats.pending / stats.total) >= 0.6 && stats.progress < 50);

            if (hasOverdue || tooMany) {
                const reasons = [];
                if (hasOverdue) reasons.push("Tareas vencidas");
                if (tooMany) reasons.push("Exceso de pendientes");
                redProjects.push({ id: p.id, title: p.meta.titulo, client: p.meta.cliente, reasons });
            }
        });

        return { blockedProjects, redProjects, upcomingProjects, urgentProjects };
    }, [filteredProjects]);

    const sumItems = (rows) => rows.reduce((acc, row) => acc + ((row.items || row.reasons || []).length), 0);
    const blockedCount = sumItems(alertsData.blockedProjects);
    const urgentCount = sumItems(alertsData.urgentProjects);
    const upcomingCount = sumItems(alertsData.upcomingProjects);
    const riskProjectIds = new Set([
        ...alertsData.blockedProjects.map(p => p.id),
        ...alertsData.urgentProjects.map(p => p.id),
        ...alertsData.redProjects.map(p => p.id)
    ]);
    const controlKpis = [
        { label: 'Bloqueos', value: blockedCount, helper: alertsData.blockedProjects.length + ' proyecto' + (alertsData.blockedProjects.length === 1 ? '' : 's'), icon: 'fa-lock', tone: 'warning' },
        { label: 'Urgentes', value: urgentCount, helper: alertsData.urgentProjects.length + ' proyecto' + (alertsData.urgentProjects.length === 1 ? '' : 's'), icon: 'fa-triangle-exclamation', tone: 'danger' },
        { label: 'Vencen en 7 dias', value: upcomingCount, helper: alertsData.upcomingProjects.length + ' proyecto' + (alertsData.upcomingProjects.length === 1 ? '' : 's'), icon: 'fa-calendar-day', tone: 'info' },
        { label: 'En atencion', value: riskProjectIds.size, helper: alertsData.redProjects.length + ' alerta' + (alertsData.redProjects.length === 1 ? '' : 's') + ' critica' + (alertsData.redProjects.length === 1 ? '' : 's'), icon: 'fa-shield-halved', tone: 'danger' }
    ];
    const openProject = (id) => { window.location.hash = '#/project/' + id; };
    const formatDue = (value) => value ? (window.formatFechaES ? window.formatFechaES(value) : value) : 'Sin fecha';
    const renderControlEmpty = (icon, title, text) => React.createElement("div", { className: "control-empty" },
        React.createElement("i", { className: 'fas ' + icon }),
        React.createElement("strong", null, title),
        React.createElement("span", null, text)
    );
    const renderAlertProject = (proj, tone, items, renderItem) => React.createElement("article", { key: proj.id, className: 'control-alert-card control-alert-card--' + tone },
        React.createElement("div", { className: "control-alert-card-head" },
            React.createElement("div", null,
                React.createElement("strong", null, proj.title || 'Proyecto sin titulo'),
                React.createElement("span", null, proj.client || 'Sin cliente')
            ),
            React.createElement("button", { type: "button", onClick: () => openProject(proj.id) },
                React.createElement("i", { className: "fas fa-arrow-up-right-from-square" }),
                "Ver proyecto"
            )
        ),
        React.createElement("div", { className: "control-alert-items" },
            items.slice(0, 5).map(renderItem),
            items.length > 5 && React.createElement("div", { className: "control-more" }, '+' + (items.length - 5) + ' mas')
        )
    );
    const renderControlSection = (className, icon, title, subtitle, count, content) => React.createElement("section", { className: 'control-panel ' + className },
        React.createElement("div", { className: "control-panel-head" },
            React.createElement("div", null,
                React.createElement("span", null, subtitle),
                React.createElement("h2", null, React.createElement("i", { className: 'fas ' + icon }), title)
            ),
            React.createElement("em", null, count)
        ),
        content
    );
    const attentionItems = [
        blockedCount ? blockedCount + ' tarea' + (blockedCount === 1 ? '' : 's') + ' bloqueada' + (blockedCount === 1 ? '' : 's') + ' por dependencias.' : 'Sin bloqueos activos por dependencias.',
        urgentCount ? urgentCount + ' tarea' + (urgentCount === 1 ? '' : 's') + ' urgente' + (urgentCount === 1 ? '' : 's') + ' requiere revision.' : 'No hay tareas urgentes filtradas.',
        upcomingCount ? upcomingCount + ' vencimiento' + (upcomingCount === 1 ? '' : 's') + ' en los proximos 7 dias.' : 'No hay vencimientos esta semana.',
        alertsData.redProjects.length ? alertsData.redProjects.length + ' proyecto' + (alertsData.redProjects.length === 1 ? '' : 's') + ' con senales criticas.' : 'No hay proyectos con alerta critica.'
    ];

    return (
        React.createElement("div", { className: "control-center-page wl-view-container" },
            React.createElement("header", { className: "control-hero no-print" },
                React.createElement("div", { className: "control-hero-main" },
                    React.createElement("button", { type: "button", onClick: onBack, className: "control-back" },
                        React.createElement("i", { className: "fas fa-arrow-left" }),
                        "Volver"
                    ),
                    React.createElement("div", null,
                        React.createElement("span", { className: "control-eyebrow" }, "Alertas de cartera"),
                        React.createElement("h1", null, "Centro de Control"),
                        React.createElement("p", null, "Bloqueos, urgencias y proximos vencimientos de los proyectos.")
                    )
                ),
                React.createElement("div", { className: "control-filters" },
                    React.createElement("label", { className: "control-search" },
                        React.createElement("i", { className: "fas fa-search" }),
                        React.createElement("input", {
                            type: "text",
                            placeholder: "Buscar proyecto, cliente o PEP...",
                            value: searchTerm,
                            onChange: (e) => setSearchTerm(e.target.value)
                        })
                    ),
                    React.createElement("select", { value: clientFilter, onChange: (e) => setClientFilter(e.target.value) },
                        React.createElement("option", { value: "Todos" }, "Todos los clientes"),
                        clients.map(c => React.createElement("option", { key: c, value: c }, c))
                    )
                )
            ),
            React.createElement("section", { className: "control-kpi-grid" },
                controlKpis.map(kpi => React.createElement("article", { key: kpi.label, className: 'control-kpi control-kpi--' + kpi.tone },
                    React.createElement("i", { className: 'fas ' + kpi.icon }),
                    React.createElement("div", null,
                        React.createElement("span", null, kpi.label),
                        React.createElement("strong", null, kpi.value),
                        React.createElement("small", null, kpi.helper)
                    )
                ))
            ),
            React.createElement("main", { className: "control-grid" },
                renderControlSection(
                    "control-panel--blocked",
                    "fa-lock",
                    "Bloqueos por dependencias",
                    "Tareas esperando a otra tarea",
                    alertsData.blockedProjects.length,
                    alertsData.blockedProjects.length
                        ? React.createElement("div", { className: "control-card-list" },
                            alertsData.blockedProjects.map(proj => renderAlertProject(proj, "blocked", proj.items || [], t =>
                                React.createElement("div", { key: t.id, className: "control-alert-item" },
                                    React.createElement("i", { className: "fas fa-lock" }),
                                    React.createElement("div", null,
                                        React.createElement("strong", null, t.tarea || 'Tarea sin titulo'),
                                        React.createElement("span", null, "Espera a: ", t.blockerName || 'Tarea pendiente')
                                    )
                                )
                            ))
                        )
                        : renderControlEmpty("fa-unlock", "Sin bloqueos activos", "No hay tareas bloqueadas por dependencias con los filtros actuales.")
                ),
                renderControlSection(
                    "control-panel--urgent",
                    "fa-triangle-exclamation",
                    "Tareas urgentes",
                    "Prioridad inmediata",
                    alertsData.urgentProjects.length,
                    alertsData.urgentProjects.length
                        ? React.createElement("div", { className: "control-card-list" },
                            alertsData.urgentProjects.map(proj => renderAlertProject(proj, "urgent", proj.items || [], t =>
                                React.createElement("div", { key: t.id, className: "control-alert-item" },
                                    React.createElement("i", { className: "fas fa-bolt" }),
                                    React.createElement("div", null,
                                        React.createElement("strong", null, t.tarea || 'Tarea sin titulo'),
                                        React.createElement("span", null, (t.area || 'General'), " - ", formatDue(t.fechaLimite))
                                    )
                                )
                            ))
                        )
                        : renderControlEmpty("fa-circle-check", "Sin tareas urgentes", "No hay tareas con prioridad urgente en los proyectos filtrados.")
                ),
                renderControlSection(
                    "control-panel--upcoming",
                    "fa-calendar-day",
                    "Proximos vencimientos",
                    "Agenda de los proximos 7 dias",
                    alertsData.upcomingProjects.length,
                    alertsData.upcomingProjects.length
                        ? React.createElement("div", { className: "control-card-list" },
                            alertsData.upcomingProjects.map(proj => renderAlertProject(proj, "upcoming", proj.items || [], t =>
                                React.createElement("div", { key: t.id, className: "control-alert-item control-alert-item--date" },
                                    React.createElement("i", { className: "fas fa-calendar-day" }),
                                    React.createElement("div", null,
                                        React.createElement("strong", null, t.tarea || 'Tarea sin titulo'),
                                        React.createElement("span", null, t.area || 'General')
                                    ),
                                    React.createElement("time", null, formatDue(t.fechaLimite))
                                )
                            ))
                        )
                        : renderControlEmpty("fa-calendar-check", "No hay vencimientos esta semana", "No hay tareas con fecha limite en los proximos 7 dias.")
                ),
                renderControlSection(
                    "control-panel--summary",
                    "fa-shield-heart",
                    "Resumen de atencion",
                    "Lectura ejecutiva",
                    riskProjectIds.size,
                    React.createElement("div", { className: "control-summary-list" },
                        attentionItems.map((item, idx) => React.createElement("div", { key: idx, className: "control-summary-row" },
                            React.createElement("i", { className: 'fas ' + (idx === 0 ? 'fa-lock' : idx === 1 ? 'fa-bolt' : idx === 2 ? 'fa-calendar-day' : 'fa-circle-exclamation') }),
                            React.createElement("span", null, item)
                        )),
                        alertsData.redProjects.length ? React.createElement("div", { className: "control-risk-list" },
                            alertsData.redProjects.map(proj => React.createElement("button", { type: "button", key: proj.id, onClick: () => openProject(proj.id) },
                                React.createElement("strong", null, proj.title || 'Proyecto sin titulo'),
                                React.createElement("span", null, (proj.reasons || []).join(' - ') || 'Requiere seguimiento')
                            ))
                        ) : null
                    )
                )
            )
        )
    );
};

// --- VISTA: GRÁFICOS Y ANALÍTICA (Charts) ---
const ChartsViewPhase1 = ({ projects, onBack }) => {
  const didAnimateRef = React.useRef(false);
  const [themeTick, setThemeTick] = React.useState(0);
  const donutRef = React.useRef(null);
  const dueRef = React.useRef(null);
  const byAssigneeRef = React.useRef(null);
  const byPriorityRef = React.useRef(null);
  const byAreaRef = React.useRef(null);
  const dependenciesRef = React.useRef(null);
  const chartsRef = React.useRef([]);

  const analytics = React.useMemo(() => {
    const list = Array.isArray(projects) ? projects : [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const soon = new Date(today);
    soon.setDate(today.getDate() + 7);
    const dayOfWeek = today.getDay() || 7;
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - dayOfWeek + 1);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    const nextWeekStart = new Date(weekStart);
    nextWeekStart.setDate(weekStart.getDate() + 7);
    const nextWeekEnd = new Date(weekStart);
    nextWeekEnd.setDate(weekStart.getDate() + 13);

    const rows = [];
    let progressSum = 0;
    let totalTasks = 0;
    list.forEach(project => {
      const tasks = Array.isArray(project && project.tasks) ? project.tasks : [];
      const idx = buildTaskIndex(tasks);
      const stats = computeProjectStats(tasks);
      totalTasks += stats.total || 0;
      progressSum += stats.progressSum || 0;
      tasks.forEach(task => rows.push({
        task,
        taskIndex: idx,
        projectTitle: (project && project.meta && project.meta.titulo) || 'Proyecto sin título'
      }));
    });

    const estadoCounts = { Pendiente: 0, 'En Curso': 0, Completado: 0 };
    const areaCounts = {};
    const priorityCounts = {};
    const assigneeMap = {};
    const dueCounts = { Vencidas: 0, 'Esta semana': 0, 'Próxima semana': 0, 'Más adelante': 0, 'Sin fecha': 0 };
    const dependencyCounts = { Bloqueadas: 0, 'No bloqueadas': 0, Completadas: 0, 'Sin dependencia': 0 };
    const blockedItems = [];

    rows.forEach(row => {
      const task = row.task || {};
      const normalized = normalizeEstado(effectiveEstado(task, row.taskIndex));
      const isCompleted = normalized === 'Completado';
      const blocked = !isCompleted && isTaskBlocked(task, row.taskIndex);
      const due = parseDateOnly(task.fechaLimite);

      if (normalized === 'Completado') estadoCounts.Completado += 1;
      else if (normalized === 'En Curso') estadoCounts['En Curso'] += 1;
      else estadoCounts.Pendiente += 1;

      const area = String(task.area || 'Sin área').trim() || 'Sin área';
      areaCounts[area] = (areaCounts[area] || 0) + 1;
      const priority = String(task.prioridad || 'Media').trim() || 'Media';
      priorityCounts[priority] = (priorityCounts[priority] || 0) + 1;

      splitAssignees(task.asignadoA).forEach(name => {
        if (!assigneeMap[name]) assigneeMap[name] = { Pendiente: 0, 'En Curso': 0, Completado: 0, total: 0 };
        const key = normalized === 'Completado' ? 'Completado' : (normalized === 'En Curso' ? 'En Curso' : 'Pendiente');
        assigneeMap[name][key] += 1;
        assigneeMap[name].total += 1;
      });

      if (!isCompleted) {
        if (!due) dueCounts['Sin fecha'] += 1;
        else if (due < today) dueCounts.Vencidas += 1;
        else if (due <= weekEnd) dueCounts['Esta semana'] += 1;
        else if (due >= nextWeekStart && due <= nextWeekEnd) dueCounts['Próxima semana'] += 1;
        else dueCounts['Más adelante'] += 1;
      }

      if (isCompleted) {
        dependencyCounts.Completadas += 1;
      } else if (!task.dependsOn) {
        dependencyCounts['Sin dependencia'] += 1;
      } else if (blocked) {
        dependencyCounts.Bloqueadas += 1;
        const dependency = row.taskIndex.get(String(task.dependsOn));
        blockedItems.push({
          id: task.id || `${row.projectTitle}-${task.tarea || blockedItems.length}`,
          taskName: task.tarea || 'Tarea sin título',
          projectTitle: row.projectTitle,
          dependencyName: dependency ? (dependency.tarea || 'Tarea sin título') : 'Dependencia no encontrada'
        });
      } else {
        dependencyCounts['No bloqueadas'] += 1;
      }
    });

    const assigneeRows = Object.entries(assigneeMap).map(([name, counts]) => ({ name, ...counts })).sort((a, b) => b.total - a.total);
    const topAssignees = assigneeRows.slice(0, 8);
    const restAssignees = assigneeRows.slice(8);
    if (restAssignees.length) {
      topAssignees.push(restAssignees.reduce((acc, row) => ({
        name: 'Otros',
        Pendiente: acc.Pendiente + row.Pendiente,
        'En Curso': acc['En Curso'] + row['En Curso'],
        Completado: acc.Completado + row.Completado,
        total: acc.total + row.total
      }), { name: 'Otros', Pendiente: 0, 'En Curso': 0, Completado: 0, total: 0 }));
    }

    const activeRows = rows.filter(row => normalizeEstado(effectiveEstado(row.task, row.taskIndex)) !== 'Completado');
    const overdueTasks = activeRows.filter(row => {
      const due = parseDateOnly(row.task.fechaLimite);
      return due && due < today;
    }).length;
    const upcomingTasks = activeRows.filter(row => {
      const due = parseDateOnly(row.task.fechaLimite);
      return due && due >= today && due <= soon;
    }).length;

    return {
      totalProjects: list.length,
      totalTasks,
      progress: totalTasks ? Math.round((progressSum / totalTasks) * 100) : 0,
      overdueTasks,
      blockedTasks: dependencyCounts.Bloqueadas,
      upcomingTasks,
      estadoCounts,
      dueCounts,
      assignees: topAssignees,
      priorityCounts,
      areaCounts,
      dependencyCounts,
      blockedItems: blockedItems.slice(0, 5)
    };
  }, [projects]);

  const seriesFromCounts = (counts, order, limit) => {
    const base = order || Object.keys(counts || {});
    const entries = base.filter(label => counts[label] != null).map(label => [label, counts[label] || 0]);
    const extra = Object.entries(counts || {}).filter(([label]) => !entries.some(([known]) => known === label)).sort((a, b) => b[1] - a[1]);
    const merged = entries.concat(extra).sort((a, b) => {
      if (order && order.includes(a[0]) && order.includes(b[0])) return order.indexOf(a[0]) - order.indexOf(b[0]);
      if (order && order.includes(a[0])) return -1;
      if (order && order.includes(b[0])) return 1;
      return b[1] - a[1];
    });
    return typeof limit === 'number' ? merged.slice(0, limit) : merged;
  };

  React.useEffect(() => {
    const el = document.documentElement;
    const obs = new MutationObserver(() => setThemeTick(t => t + 1));
    obs.observe(el, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  React.useEffect(() => {
    for (const ch of chartsRef.current) {
      try { ch.destroy(); } catch(e) {}
    }
    chartsRef.current = [];
    const anim = didAnimateRef.current ? false : { duration: 650 };
    const ChartJS = (window && window.Chart) ? window.Chart : null;
    if (!ChartJS) {
      console.error("Chart.js no está cargado. Revisa index.html.");
      return;
    }

    const isDark = document.documentElement.classList.contains('theme-dark');
    const theme = {
      text: isDark ? '#e5e7eb' : '#111827',
      grid: isDark ? 'rgba(148,163,184,0.22)' : 'rgba(148,163,184,0.35)',
      tooltipBg: isDark ? 'rgba(15,23,42,0.92)' : 'rgba(255,255,255,0.96)',
      border: isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.10)'
    };
    const commonOptions = {
      responsive: true,
      maintainAspectRatio: false,
      animation: anim,
      plugins: {
        legend: { labels: { color: theme.text } },
        tooltip: { backgroundColor: theme.tooltipBg, titleColor: theme.text, bodyColor: theme.text }
      },
      scales: {
        x: { ticks: { color: theme.text }, grid: { color: theme.grid } },
        y: { beginAtZero: true, ticks: { color: theme.text, precision: 0 }, grid: { color: theme.grid } }
      }
    };
    const pushChart = (ref, config) => {
      if (!ref.current) return;
      const ch = new ChartJS(ref.current, config);
      chartsRef.current.push(ch);
    };

    const estadoSeries = seriesFromCounts(analytics.estadoCounts, ['Pendiente', 'En Curso', 'Completado']);
    pushChart(donutRef, {
      type: 'doughnut',
      data: { labels: estadoSeries.map(x => x[0]), datasets: [{ data: estadoSeries.map(x => x[1]), backgroundColor: ['#ef4444', '#f59e0b', '#10b981'], borderColor: theme.border, borderWidth: 2 }] },
      options: { responsive: true, maintainAspectRatio: false, animation: anim, plugins: { legend: { position: 'bottom', labels: { color: theme.text, boxWidth: 14, boxHeight: 10, padding: 14 } }, tooltip: commonOptions.plugins.tooltip } }
    });

    const dueSeries = seriesFromCounts(analytics.dueCounts, ['Vencidas', 'Esta semana', 'Próxima semana', 'Más adelante', 'Sin fecha']);
    pushChart(dueRef, {
      type: 'bar',
      data: { labels: dueSeries.map(x => x[0]), datasets: [{ label: 'Tareas abiertas', data: dueSeries.map(x => x[1]), backgroundColor: ['#ef4444', '#f59e0b', '#0ea5e9', '#64748b', '#94a3b8'] }] },
      options: { ...commonOptions, plugins: { ...commonOptions.plugins, legend: { display: false } } }
    });

    pushChart(byAssigneeRef, {
      type: 'bar',
      data: {
        labels: analytics.assignees.map(row => row.name),
        datasets: [
          { label: 'Pendientes', data: analytics.assignees.map(row => row.Pendiente), backgroundColor: '#ef4444' },
          { label: 'En curso', data: analytics.assignees.map(row => row['En Curso']), backgroundColor: '#f59e0b' },
          { label: 'Completadas', data: analytics.assignees.map(row => row.Completado), backgroundColor: '#10b981' }
        ]
      },
      options: { ...commonOptions, scales: { x: { stacked: true, ticks: { color: theme.text }, grid: { color: theme.grid } }, y: { stacked: true, beginAtZero: true, ticks: { color: theme.text, precision: 0 }, grid: { color: theme.grid } } } }
    });

    const prioritySeries = seriesFromCounts(analytics.priorityCounts, ['Urgente', 'Alta', 'Media', 'Baja']);
    pushChart(byPriorityRef, {
      type: 'bar',
      data: { labels: prioritySeries.map(x => x[0]), datasets: [{ label: 'Tareas', data: prioritySeries.map(x => x[1]), backgroundColor: '#0ea5e9' }] },
      options: { ...commonOptions, plugins: { ...commonOptions.plugins, legend: { display: false } } }
    });

    const areaSeries = seriesFromCounts(analytics.areaCounts, null, 15);
    pushChart(byAreaRef, {
      type: 'bar',
      data: { labels: areaSeries.map(x => x[0]), datasets: [{ label: 'Tareas', data: areaSeries.map(x => x[1]), backgroundColor: '#8b5cf6' }] },
      options: { ...commonOptions, indexAxis: 'y', plugins: { ...commonOptions.plugins, legend: { display: false } } }
    });

    const dependencySeries = seriesFromCounts(analytics.dependencyCounts, ['Bloqueadas', 'No bloqueadas', 'Completadas', 'Sin dependencia']);
    pushChart(dependenciesRef, {
      type: 'doughnut',
      data: { labels: dependencySeries.map(x => x[0]), datasets: [{ data: dependencySeries.map(x => x[1]), backgroundColor: ['#ef4444', '#0ea5e9', '#10b981', '#94a3b8'], borderColor: theme.border, borderWidth: 2 }] },
      options: { responsive: true, maintainAspectRatio: false, animation: anim, plugins: { legend: { position: 'bottom', labels: { color: theme.text, boxWidth: 14, boxHeight: 10, padding: 14 } }, tooltip: commonOptions.plugins.tooltip } }
    });

    didAnimateRef.current = true;
    return () => {
      for (const ch of chartsRef.current) {
        try { ch.destroy(); } catch(e) {}
      }
      chartsRef.current = [];
    };
  }, [analytics, themeTick]);

  const kpis = [
    { icon: 'fa-folder-open', label: 'Total proyectos', value: analytics.totalProjects, helper: 'Cartera visible' },
    { icon: 'fa-list-check', label: 'Total tareas', value: analytics.totalTasks, helper: 'Todas las tareas' },
    { icon: 'fa-chart-line', label: 'Progreso global', value: `${analytics.progress}%`, helper: 'Media ponderada' },
    { icon: 'fa-calendar-xmark', label: 'Tareas vencidas', value: analytics.overdueTasks, helper: 'Abiertas y fuera de plazo' },
    { icon: 'fa-lock', label: 'Bloqueadas', value: analytics.blockedTasks, helper: 'Por dependencias activas' },
    { icon: 'fa-calendar-week', label: 'Próximos 7 días', value: analytics.upcomingTasks, helper: 'Vencimientos abiertos' }
  ];

  return React.createElement("div", { className: "min-h-screen pb-20", style: { background: 'var(--app-bg)' } },
    React.createElement("div", { className: "wl-header-sticky no-print", style: { height: 'auto', display: 'block', padding: 0 } },
      React.createElement("div", { className: "app-page py-4" },
        React.createElement("div", { className: "app-page-header", style: { marginBottom: 0 } },
          React.createElement("div", { className: "flex items-start gap-3" },
            React.createElement("button", { onClick: onBack, className: "btn-apple", style: { height: '36px', fontSize: '13px' } }, React.createElement("i", { className: "fas fa-arrow-left" }), " Volver"),
            React.createElement("div", null,
              React.createElement("h1", { className: "app-page-title" }, "Gráficos y analítica"),
              React.createElement("p", { className: "app-page-subtitle" }, "Vista ejecutiva del estado, carga y riesgos de los proyectos")
            )
          )
        )
      )
    ),
    React.createElement("main", { className: "app-page charts-analytics-page" },
      React.createElement("section", { className: "app-kpi-grid charts-kpi-grid" },
        kpis.map(kpi => React.createElement("article", { className: "app-kpi-card", key: kpi.label },
          React.createElement("span", { className: "app-kpi-icon" }, React.createElement("i", { className: `fas ${kpi.icon}` })),
          React.createElement("div", null, React.createElement("div", { className: "app-kpi-label" }, kpi.label), React.createElement("div", { className: "app-kpi-value" }, kpi.value), React.createElement("div", { className: "app-kpi-helper" }, kpi.helper))
        ))
      ),
      React.createElement("section", { className: "charts-main-grid" },
        React.createElement("article", { className: "app-section-card charts-card" }, React.createElement("div", { className: "app-card-header" }, React.createElement("div", null, React.createElement("h2", { className: "app-card-title" }, "Estado y progreso"), React.createElement("p", { className: "app-card-subtitle" }, "Distribución global de tareas por estado efectivo")), React.createElement("span", { className: "charts-progress-pill" }, `${analytics.progress}%`)), React.createElement("div", { className: "charts-canvas charts-canvas--donut" }, React.createElement("canvas", { ref: donutRef }))),
        React.createElement("article", { className: "app-section-card charts-card" }, React.createElement("div", { className: "app-card-header" }, React.createElement("div", null, React.createElement("h2", { className: "app-card-title" }, "Vencimientos por semana"), React.createElement("p", { className: "app-card-subtitle" }, "Tareas abiertas agrupadas por riesgo de fecha"))), React.createElement("div", { className: "charts-canvas" }, React.createElement("canvas", { ref: dueRef })))
      ),
      React.createElement("section", { className: "app-section-card charts-card" }, React.createElement("div", { className: "app-card-header" }, React.createElement("div", null, React.createElement("h2", { className: "app-card-title" }, "Carga por responsable"), React.createElement("p", { className: "app-card-subtitle" }, "Top responsables por volumen, separado por estado"))), React.createElement("div", { className: "charts-canvas charts-canvas--wide" }, React.createElement("canvas", { ref: byAssigneeRef }))),
      React.createElement("section", { className: "charts-main-grid" },
        React.createElement("article", { className: "app-section-card charts-card" }, React.createElement("div", { className: "app-card-header" }, React.createElement("div", null, React.createElement("h2", { className: "app-card-title" }, "Prioridad"), React.createElement("p", { className: "app-card-subtitle" }, "Distribución por criticidad declarada"))), React.createElement("div", { className: "charts-canvas" }, React.createElement("canvas", { ref: byPriorityRef }))),
        React.createElement("article", { className: "app-section-card charts-card" }, React.createElement("div", { className: "app-card-header" }, React.createElement("div", null, React.createElement("h2", { className: "app-card-title" }, "Área"), React.createElement("p", { className: "app-card-subtitle" }, "Top áreas con más tareas"))), React.createElement("div", { className: "charts-canvas" }, React.createElement("canvas", { ref: byAreaRef })))
      ),
      React.createElement("section", { className: "charts-dependency-grid" },
        React.createElement("article", { className: "app-section-card charts-card" }, React.createElement("div", { className: "app-card-header" }, React.createElement("div", null, React.createElement("h2", { className: "app-card-title" }, "Dependencias"), React.createElement("p", { className: "app-card-subtitle" }, "Bloqueos, desbloqueos y tareas sin dependencia"))), React.createElement("div", { className: "charts-canvas charts-canvas--donut" }, React.createElement("canvas", { ref: dependenciesRef }))),
        React.createElement("article", { className: "app-section-card charts-card" },
          React.createElement("div", { className: "app-card-header" }, React.createElement("div", null, React.createElement("h2", { className: "app-card-title" }, "Bloqueos activos"), React.createElement("p", { className: "app-card-subtitle" }, "Máximo 5 tareas pendientes de una dependencia"))),
          analytics.blockedItems.length
            ? React.createElement("div", { className: "charts-blocked-list" }, analytics.blockedItems.map(item => React.createElement("div", { className: "charts-blocked-item", key: item.id }, React.createElement("i", { className: "fas fa-lock" }), React.createElement("div", null, React.createElement("strong", null, item.taskName), React.createElement("span", null, item.projectTitle), React.createElement("small", null, `Depende de: ${item.dependencyName}`)))))
            : React.createElement("div", { className: "control-empty charts-empty" }, React.createElement("i", { className: "fas fa-unlock" }), React.createElement("strong", null, "No hay tareas bloqueadas"), React.createElement("span", null, "Las dependencias activas no están frenando tareas abiertas."))
        )
      )
    )
  );
};

const ChartsView = ({ projects, onBack }) => {
  const didAnimateRef = React.useRef(false);
  const [themeTick, setThemeTick] = React.useState(0);
  const [filters, setFilters] = React.useState({ projectId: 'Todos', client: 'Todos', status: 'Todos', assignee: 'Todos', range: 'all' });
  const donutRef = React.useRef(null);
  const dueRef = React.useRef(null);
  const byAssigneeRef = React.useRef(null);
  const byPriorityRef = React.useRef(null);
  const byAreaRef = React.useRef(null);
  const dependenciesRef = React.useRef(null);
  const chartsRef = React.useRef([]);

  const today = React.useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const filterOptions = React.useMemo(() => {
    const list = Array.isArray(projects) ? projects : [];
    const clients = new Set();
    const statuses = new Set();
    const assignees = new Set();
    list.forEach(project => {
      const meta = (project && project.meta) || {};
      const client = String(meta.cliente || '').trim();
      if (client) clients.add(client);
      statuses.add(normalizeProjectEstado(meta.estado));
      [meta.responsableProyecto, meta.ejecutorProyecto].forEach(name => {
        const clean = String(name || '').trim();
        if (clean) assignees.add(clean);
      });
      (Array.isArray(project && project.tasks) ? project.tasks : []).forEach(task => {
        splitAssignees(task.asignadoA).forEach(name => assignees.add(name));
      });
    });
    return {
      projects: list.map(project => ({ id: String(project && project.id), title: (project && project.meta && project.meta.titulo) || 'Proyecto sin titulo' })).sort((a, b) => a.title.localeCompare(b.title, 'es')),
      clients: Array.from(clients).sort((a, b) => a.localeCompare(b, 'es')),
      statuses: Array.from(statuses).filter(Boolean).sort((a, b) => a.localeCompare(b, 'es')),
      assignees: Array.from(assignees).filter(Boolean).sort((a, b) => a.localeCompare(b, 'es'))
    };
  }, [projects]);

  const setFilter = (key, value) => setFilters(prev => ({ ...prev, [key]: value }));
  const clearFilters = () => setFilters({ projectId: 'Todos', client: 'Todos', status: 'Todos', assignee: 'Todos', range: 'all' });
  const hasActiveFilters = filters.projectId !== 'Todos' || filters.client !== 'Todos' || filters.status !== 'Todos' || filters.assignee !== 'Todos' || filters.range !== 'all';

  const analytics = React.useMemo(() => {
    const list = Array.isArray(projects) ? projects : [];
    const allTasksCount = list.reduce((sum, project) => sum + (Array.isArray(project && project.tasks) ? project.tasks.length : 0), 0);
    const soon7 = new Date(today);
    soon7.setDate(today.getDate() + 7);
    const soon30 = new Date(today);
    soon30.setDate(today.getDate() + 30);
    const dayOfWeek = today.getDay() || 7;
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - dayOfWeek + 1);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    const nextWeekStart = new Date(weekStart);
    nextWeekStart.setDate(weekStart.getDate() + 7);
    const nextWeekEnd = new Date(weekStart);
    nextWeekEnd.setDate(weekStart.getDate() + 13);
    const projectFiltered = [];
    const rows = [];
    let progressSum = 0;

    const matchesDateRange = (task, isCompleted) => {
      const due = parseDateOnly(task.fechaLimite);
      if (filters.range === 'all') return true;
      if (filters.range === 'overdue') return !isCompleted && due && due < today;
      if (filters.range === 'next7') return !isCompleted && due && due >= today && due <= soon7;
      if (filters.range === 'next30') return !isCompleted && due && due >= today && due <= soon30;
      if (filters.range === 'nodate') return !due;
      return true;
    };

    list.forEach(project => {
      const meta = (project && project.meta) || {};
      const projectId = String(project && project.id);
      const projectStatus = normalizeProjectEstado(meta.estado);
      const projectClient = String(meta.cliente || '').trim() || 'Sin cliente';
      if (filters.projectId !== 'Todos' && projectId !== filters.projectId) return;
      if (filters.client !== 'Todos' && projectClient !== filters.client) return;
      if (filters.status !== 'Todos' && projectStatus !== filters.status) return;
      const tasks = Array.isArray(project && project.tasks) ? project.tasks : [];
      const idx = buildTaskIndex(tasks);
      const projectRow = { title: meta.titulo || 'Proyecto sin titulo', client: projectClient, matchedTasks: 0 };
      projectFiltered.push(projectRow);
      tasks.forEach(task => {
        const normalized = normalizeEstado(effectiveEstado(task, idx));
        const isCompleted = normalized === 'Completado';
        const taskAssignees = splitAssignees(task.asignadoA);
        const projectPeople = [meta.responsableProyecto, meta.ejecutorProyecto].map(v => String(v || '').trim()).filter(Boolean);
        if (filters.assignee !== 'Todos' && !taskAssignees.includes(filters.assignee) && !projectPeople.includes(filters.assignee)) return;
        if (!matchesDateRange(task, isCompleted)) return;
        projectRow.matchedTasks += 1;
        rows.push({ task, taskIndex: idx, projectTitle: projectRow.title, projectClient, estado: normalized, isCompleted, due: parseDateOnly(task.fechaLimite) });
      });
    });

    rows.forEach(row => {
      if (row.isCompleted) {
        progressSum += 1;
        return;
      }
      const subs = Array.isArray(row.task.subtasks) ? row.task.subtasks : [];
      if (subs.length) progressSum += subs.filter(s => !!s.done).length / subs.length;
    });

    const totalTasks = rows.length;
    const filteredProjectCount = (filters.assignee !== 'Todos' || filters.range !== 'all') ? new Set(rows.map(row => `${row.projectTitle}::${row.projectClient}`)).size : projectFiltered.length;
    const estadoCounts = { Pendiente: 0, 'En Curso': 0, Completado: 0 };
    const areaCounts = {};
    const priorityCounts = {};
    const assigneeMap = {};
    const dueCounts = { Vencidas: 0, 'Esta semana': 0, 'Proxima semana': 0, 'Mas adelante': 0, 'Sin fecha': 0 };
    const dependencyCounts = { Bloqueadas: 0, 'No bloqueadas': 0, Completadas: 0, 'Sin dependencia': 0 };
    const blockedItems = [];
    let tasksWithDate = 0, overdueTasks = 0, upcoming7 = 0, noDateTasks = 0;

    rows.forEach(row => {
      const task = row.task || {};
      const normalized = row.estado;
      const blocked = !row.isCompleted && isTaskBlocked(task, row.taskIndex);
      const dependency = task.dependsOn ? row.taskIndex.get(String(task.dependsOn)) : null;
      if (normalized === 'Completado') estadoCounts.Completado += 1;
      else if (normalized === 'En Curso') estadoCounts['En Curso'] += 1;
      else estadoCounts.Pendiente += 1;
      const area = String(task.area || 'Sin area').trim() || 'Sin area';
      areaCounts[area] = (areaCounts[area] || 0) + 1;
      const priority = String(task.prioridad || 'Media').trim() || 'Media';
      priorityCounts[priority] = (priorityCounts[priority] || 0) + 1;
      splitAssignees(task.asignadoA).forEach(name => {
        if (!assigneeMap[name]) assigneeMap[name] = { Pendiente: 0, 'En Curso': 0, Completado: 0, total: 0 };
        const key = normalized === 'Completado' ? 'Completado' : (normalized === 'En Curso' ? 'En Curso' : 'Pendiente');
        assigneeMap[name][key] += 1;
        assigneeMap[name].total += 1;
      });
      if (row.due) tasksWithDate += 1;
      else noDateTasks += 1;
      if (!row.isCompleted) {
        if (!row.due) dueCounts['Sin fecha'] += 1;
        else if (row.due < today) { dueCounts.Vencidas += 1; overdueTasks += 1; }
        else if (row.due <= weekEnd) dueCounts['Esta semana'] += 1;
        else if (row.due >= nextWeekStart && row.due <= nextWeekEnd) dueCounts['Proxima semana'] += 1;
        else dueCounts['Mas adelante'] += 1;
        if (row.due && row.due >= today && row.due <= soon7) upcoming7 += 1;
      }
      if (row.isCompleted) {
        dependencyCounts.Completadas += 1;
      } else if (!task.dependsOn) {
        dependencyCounts['Sin dependencia'] += 1;
      } else if (blocked) {
        dependencyCounts.Bloqueadas += 1;
        blockedItems.push({
          id: task.id || `${row.projectTitle}-${task.tarea || blockedItems.length}`,
          taskName: task.tarea || 'Tarea sin titulo',
          projectTitle: row.projectTitle,
          dependencyName: dependency ? (dependency.tarea || 'Tarea sin titulo') : 'Dependencia no encontrada',
          dependencyStatus: dependency ? normalizeEstado(dependency.estado) : 'No encontrada'
        });
      } else {
        dependencyCounts['No bloqueadas'] += 1;
      }
    });

    const assigneeRows = Object.entries(assigneeMap).map(([name, counts]) => ({ name, ...counts })).sort((a, b) => b.total - a.total);
    const topAssignees = assigneeRows.slice(0, 8);
    const restAssignees = assigneeRows.slice(8);
    if (restAssignees.length) {
      topAssignees.push(restAssignees.reduce((acc, row) => ({ name: 'Otros', Pendiente: acc.Pendiente + row.Pendiente, 'En Curso': acc['En Curso'] + row['En Curso'], Completado: acc.Completado + row.Completado, total: acc.total + row.total }), { name: 'Otros', Pendiente: 0, 'En Curso': 0, Completado: 0, total: 0 }));
    }
    return { sourceProjects: list.length, sourceTasks: allTasksCount, totalProjects: filteredProjectCount, totalTasks, progress: totalTasks ? Math.round((progressSum / totalTasks) * 100) : 0, overdueTasks, blockedTasks: dependencyCounts.Bloqueadas, upcomingTasks: upcoming7, noDateTasks, tasksWithDate, estadoCounts, dueCounts, assignees: topAssignees, priorityCounts, areaCounts, dependencyCounts, blockedItems: blockedItems.slice(0, 5), blockedTotal: blockedItems.length };
  }, [projects, filters, today]);

  const seriesFromCounts = (counts, order, limit) => {
    const base = order || Object.keys(counts || {});
    const entries = base.filter(label => counts[label] != null).map(label => [label, counts[label] || 0]);
    const extra = Object.entries(counts || {}).filter(([label]) => !entries.some(([known]) => known === label)).sort((a, b) => b[1] - a[1]);
    const merged = entries.concat(extra).sort((a, b) => order && order.includes(a[0]) && order.includes(b[0]) ? order.indexOf(a[0]) - order.indexOf(b[0]) : order && order.includes(a[0]) ? -1 : order && order.includes(b[0]) ? 1 : b[1] - a[1]);
    return typeof limit === 'number' ? merged.slice(0, limit) : merged;
  };
  const seriesTotal = (series) => series.reduce((sum, item) => sum + (item[1] || 0), 0);
  const tooltipLabel = (context, suffix) => {
    const label = context.label || context.dataset.label || 'Valor';
    const raw = typeof context.parsed === 'number' ? context.parsed : (context.parsed && (context.parsed.y ?? context.parsed.x)) || 0;
    const datasetTotal = (context.dataset.data || []).reduce((sum, value) => sum + Number(value || 0), 0);
    const pct = datasetTotal ? ` (${Math.round((raw / datasetTotal) * 100)}%)` : '';
    return `${label}: ${raw}${suffix || ' tareas'}${pct}`;
  };

  React.useEffect(() => {
    const el = document.documentElement;
    const obs = new MutationObserver(() => setThemeTick(t => t + 1));
    obs.observe(el, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  React.useEffect(() => {
    for (const ch of chartsRef.current) { try { ch.destroy(); } catch(e) {} }
    chartsRef.current = [];
    if (!analytics.totalTasks) return;
    const anim = didAnimateRef.current ? false : { duration: 650 };
    const ChartJS = (window && window.Chart) ? window.Chart : null;
    if (!ChartJS) { console.error("Chart.js no esta cargado. Revisa index.html."); return; }
    const isDark = document.documentElement.classList.contains('theme-dark');
    const theme = { text: isDark ? '#e5e7eb' : '#111827', grid: isDark ? 'rgba(148,163,184,0.20)' : 'rgba(148,163,184,0.28)', tooltipBg: isDark ? 'rgba(15,23,42,0.96)' : 'rgba(255,255,255,0.98)', border: isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.10)' };
    const commonOptions = { responsive: true, maintainAspectRatio: false, animation: anim, plugins: { legend: { position: 'bottom', labels: { color: theme.text, boxWidth: 13, boxHeight: 9, padding: 14 } }, tooltip: { backgroundColor: theme.tooltipBg, titleColor: theme.text, bodyColor: theme.text, borderColor: theme.border, borderWidth: 1, padding: 10, callbacks: { label: (ctx) => tooltipLabel(ctx) } } }, scales: { x: { ticks: { color: theme.text }, grid: { color: theme.grid } }, y: { beginAtZero: true, ticks: { color: theme.text, precision: 0 }, grid: { color: theme.grid } } } };
    const pushChart = (ref, config) => { if (!ref.current) return; const ch = new ChartJS(ref.current, config); chartsRef.current.push(ch); };

    const estadoSeries = seriesFromCounts(analytics.estadoCounts, ['Pendiente', 'En Curso', 'Completado']);
    if (seriesTotal(estadoSeries)) pushChart(donutRef, { type: 'doughnut', data: { labels: estadoSeries.map(x => x[0]), datasets: [{ label: 'Estado', data: estadoSeries.map(x => x[1]), backgroundColor: ['#ef4444', '#f59e0b', '#10b981'], borderColor: theme.border, borderWidth: 2 }] }, options: { ...commonOptions, cutout: '62%', scales: undefined } });
    const dueSeries = seriesFromCounts(analytics.dueCounts, ['Vencidas', 'Esta semana', 'Proxima semana', 'Mas adelante', 'Sin fecha']);
    if (seriesTotal(dueSeries) && analytics.tasksWithDate) pushChart(dueRef, { type: 'bar', data: { labels: dueSeries.map(x => x[0]), datasets: [{ label: 'Vencimientos', data: dueSeries.map(x => x[1]), backgroundColor: ['#ef4444', '#f59e0b', '#0ea5e9', '#64748b', '#94a3b8'], borderRadius: 8 }] }, options: { ...commonOptions, plugins: { ...commonOptions.plugins, legend: { display: false }, tooltip: { ...commonOptions.plugins.tooltip, callbacks: { label: (ctx) => tooltipLabel(ctx, ' tareas abiertas') } } } } });
    if (analytics.assignees.length) pushChart(byAssigneeRef, { type: 'bar', data: { labels: analytics.assignees.map(row => row.name), datasets: [{ label: 'Pendientes', data: analytics.assignees.map(row => row.Pendiente), backgroundColor: '#ef4444', borderRadius: 6 }, { label: 'En curso', data: analytics.assignees.map(row => row['En Curso']), backgroundColor: '#f59e0b', borderRadius: 6 }, { label: 'Completadas', data: analytics.assignees.map(row => row.Completado), backgroundColor: '#10b981', borderRadius: 6 }] }, options: { ...commonOptions, plugins: { ...commonOptions.plugins, tooltip: { ...commonOptions.plugins.tooltip, callbacks: { label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y || 0} tareas` } } }, scales: { x: { stacked: true, ticks: { color: theme.text }, grid: { display: false } }, y: { stacked: true, beginAtZero: true, ticks: { color: theme.text, precision: 0 }, grid: { color: theme.grid } } } } });
    const prioritySeries = seriesFromCounts(analytics.priorityCounts, ['Urgente', 'Alta', 'Media', 'Baja']);
    if (seriesTotal(prioritySeries)) pushChart(byPriorityRef, { type: 'bar', data: { labels: prioritySeries.map(x => x[0]), datasets: [{ label: 'Prioridad', data: prioritySeries.map(x => x[1]), backgroundColor: '#0ea5e9', borderRadius: 8 }] }, options: { ...commonOptions, plugins: { ...commonOptions.plugins, legend: { display: false } } } });
    const areaSeries = seriesFromCounts(analytics.areaCounts, null, 12);
    if (seriesTotal(areaSeries)) pushChart(byAreaRef, { type: 'bar', data: { labels: areaSeries.map(x => x[0]), datasets: [{ label: 'Area', data: areaSeries.map(x => x[1]), backgroundColor: '#8b5cf6', borderRadius: 8 }] }, options: { ...commonOptions, indexAxis: 'y', plugins: { ...commonOptions.plugins, legend: { display: false } } } });
    const dependencySeries = seriesFromCounts(analytics.dependencyCounts, ['Bloqueadas', 'No bloqueadas', 'Completadas', 'Sin dependencia']);
    if (seriesTotal(dependencySeries)) pushChart(dependenciesRef, { type: 'doughnut', data: { labels: dependencySeries.map(x => x[0]), datasets: [{ label: 'Dependencias', data: dependencySeries.map(x => x[1]), backgroundColor: ['#ef4444', '#0ea5e9', '#10b981', '#94a3b8'], borderColor: theme.border, borderWidth: 2 }] }, options: { ...commonOptions, cutout: '62%', scales: undefined } });
    didAnimateRef.current = true;
    return () => { for (const ch of chartsRef.current) { try { ch.destroy(); } catch(e) {} } chartsRef.current = []; };
  }, [analytics, themeTick]);

  const renderEmpty = (icon, title, text) => React.createElement("div", { className: "control-empty charts-empty" }, React.createElement("i", { className: `fas ${icon}` }), React.createElement("strong", null, title), React.createElement("span", null, text));
  const kpis = [{ icon: 'fa-folder-open', label: 'Total proyectos', value: analytics.totalProjects, helper: hasActiveFilters ? 'Segun filtros' : 'Cartera visible' }, { icon: 'fa-list-check', label: 'Total tareas', value: analytics.totalTasks, helper: hasActiveFilters ? 'Tareas filtradas' : 'Todas las tareas' }, { icon: 'fa-chart-line', label: 'Progreso global', value: `${analytics.progress}%`, helper: 'Media ponderada' }, { icon: 'fa-calendar-xmark', label: 'Tareas vencidas', value: analytics.overdueTasks, helper: 'Abiertas y fuera de plazo' }, { icon: 'fa-lock', label: 'Bloqueadas', value: analytics.blockedTasks, helper: 'Por dependencias activas' }, { icon: 'fa-calendar-week', label: 'Proximos 7 dias', value: analytics.upcomingTasks, helper: 'Vencimientos abiertos' }];
  const topEmpty = analytics.sourceProjects === 0 ? { icon: 'fa-folder-open', title: 'No hay proyectos disponibles.', text: 'Crea o importa proyectos para ver la analitica.' } : analytics.sourceTasks === 0 ? { icon: 'fa-list-check', title: 'No hay tareas para analizar.', text: 'Los proyectos existen, pero todavia no tienen tareas.' } : analytics.totalTasks === 0 ? { icon: 'fa-filter-circle-xmark', title: 'No hay resultados con los filtros actuales.', text: 'Prueba a limpiar filtros o ampliar el rango temporal.' } : null;

  return (
    <div className="min-h-screen pb-20" style={{ background: 'var(--app-bg)' }}>
      <div className="wl-header-sticky no-print" style={{ height: 'auto', display: 'block', padding: 0 }}>
        <div className="app-page py-4">
          <div className="app-page-header charts-page-header">
            <div className="charts-title-row">
              <button onClick={onBack} className="btn-apple" style={{ height: '36px', fontSize: '13px' }}>
                <i className="fas fa-arrow-left" /> Volver
              </button>
              <div>
                <h1 className="app-page-title">Graficos y analitica</h1>
                <p className="app-page-subtitle">Vista ejecutiva del estado, carga y riesgos de los proyectos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="app-page charts-analytics-page">
        <section className="app-section-card charts-filters">
          <div className="charts-filter-grid">
            <label><span>Proyecto</span><select value={filters.projectId} onChange={e => setFilter('projectId', e.target.value)}><option value="Todos">Todos</option>{filterOptions.projects.map(project => <option key={project.id} value={project.id}>{project.title}</option>)}</select></label>
            <label><span>Cliente</span><select value={filters.client} onChange={e => setFilter('client', e.target.value)}><option value="Todos">Todos</option>{filterOptions.clients.map(client => <option key={client} value={client}>{client}</option>)}</select></label>
            <label><span>Estado proyecto</span><select value={filters.status} onChange={e => setFilter('status', e.target.value)}><option value="Todos">Todos</option>{filterOptions.statuses.map(status => <option key={status} value={status}>{status}</option>)}</select></label>
            <label><span>Responsable</span><select value={filters.assignee} onChange={e => setFilter('assignee', e.target.value)}><option value="Todos">Todos</option>{filterOptions.assignees.map(name => <option key={name} value={name}>{name}</option>)}</select></label>
            <label><span>Rango temporal</span><select value={filters.range} onChange={e => setFilter('range', e.target.value)}><option value="all">Todos</option><option value="overdue">Vencidas</option><option value="next7">Proximos 7 dias</option><option value="next30">Proximos 30 dias</option><option value="nodate">Sin fecha</option></select></label>
            <button type="button" className="app-btn app-btn-secondary charts-clear-btn" onClick={clearFilters} disabled={!hasActiveFilters}><i className="fas fa-rotate-left" />Limpiar filtros</button>
          </div>
        </section>

        {topEmpty ? renderEmpty(topEmpty.icon, topEmpty.title, topEmpty.text) : (
          <>
            <section className="app-kpi-grid charts-kpi-grid">
              {kpis.map(kpi => <article className="app-kpi-card" key={kpi.label}><span className="app-kpi-icon"><i className={`fas ${kpi.icon}`} /></span><div><div className="app-kpi-label">{kpi.label}</div><div className="app-kpi-value">{kpi.value}</div><div className="app-kpi-helper">{kpi.helper}</div></div></article>)}
            </section>

            <section className="charts-temporal-strip">
              <div><span>Riesgo temporal</span><strong>{analytics.overdueTasks} vencidas</strong></div>
              <div><span>Proximos 7 dias</span><strong>{analytics.upcomingTasks}</strong></div>
              <div><span>Sin fecha</span><strong>{analytics.noDateTasks}</strong></div>
            </section>

            <section className="charts-main-grid">
              <article className="app-section-card charts-card"><div className="app-card-header"><div><h2 className="app-card-title">Estado y progreso</h2><p className="app-card-subtitle">Distribucion global de tareas por estado efectivo</p></div><span className="charts-progress-pill">{analytics.progress}%</span></div><div className="charts-canvas charts-canvas--donut"><canvas ref={donutRef} /></div></article>
              <article className="app-section-card charts-card"><div className="app-card-header"><div><h2 className="app-card-title">Vencimientos por semana</h2><p className="app-card-subtitle">Tareas abiertas agrupadas por riesgo de fecha</p></div></div>{analytics.tasksWithDate ? <div className="charts-canvas"><canvas ref={dueRef} /></div> : renderEmpty("fa-calendar-minus", "No hay tareas con vencimiento definido.", "Las tareas filtradas no tienen fecha limite.")}</article>
            </section>

            <section className="app-section-card charts-card"><div className="app-card-header"><div><h2 className="app-card-title">Carga por responsable</h2><p className="app-card-subtitle">Top responsables por volumen, separado por estado</p></div></div><div className="charts-canvas charts-canvas--wide"><canvas ref={byAssigneeRef} /></div></section>

            <section className="charts-main-grid">
              <article className="app-section-card charts-card"><div className="app-card-header"><div><h2 className="app-card-title">Prioridad</h2><p className="app-card-subtitle">Distribucion por criticidad declarada</p></div></div><div className="charts-canvas"><canvas ref={byPriorityRef} /></div></article>
              <article className="app-section-card charts-card"><div className="app-card-header"><div><h2 className="app-card-title">Area</h2><p className="app-card-subtitle">Top areas con mas tareas</p></div></div><div className="charts-canvas"><canvas ref={byAreaRef} /></div></article>
            </section>

            <section className="charts-dependency-grid">
              <article className="app-section-card charts-card"><div className="app-card-header"><div><h2 className="app-card-title">Dependencias</h2><p className="app-card-subtitle">Bloqueos, desbloqueos y tareas sin dependencia</p></div></div><div className="charts-canvas charts-canvas--donut"><canvas ref={dependenciesRef} /></div></article>
              <article className="app-section-card charts-card"><div className="app-card-header"><div><h2 className="app-card-title">Bloqueos activos</h2><p className="app-card-subtitle">{analytics.blockedTotal > 5 ? `Mostrando 5 de ${analytics.blockedTotal} bloqueos` : "Tareas pendientes de una dependencia"}</p></div></div>{analytics.blockedItems.length ? <div className="charts-blocked-list">{analytics.blockedItems.map(item => <div className="charts-blocked-item" key={item.id}><i className="fas fa-lock" /><div><strong>{item.taskName}</strong><span>{item.projectTitle}</span><small>Depende de: {item.dependencyName}</small><em>Estado dependencia: {item.dependencyStatus}</em></div></div>)}</div> : renderEmpty("fa-unlock", "No hay tareas bloqueadas.", "Las dependencias activas no estan frenando tareas abiertas.")}</article>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

// --- Seguridad: saneado básico de HTML antes de mostrar/guardar la Wiki ---
// Evita que un backup manipulado o contenido pegado en Quill pueda ejecutar scripts.
const sanitizeWikiHtml = (html) => {
    try {
        const raw = String(html || "");
        if (!raw) return "";
        const template = document.createElement('template');
        template.innerHTML = raw;
        const blockedTags = new Set(['script', 'style', 'iframe', 'object', 'embed', 'link', 'meta', 'base', 'form', 'input', 'button']);
        const walk = (node) => {
            const children = Array.from(node.children || []);
            children.forEach((el) => {
                const tag = String(el.tagName || '').toLowerCase();
                if (blockedTags.has(tag)) {
                    el.remove();
                    return;
                }
                Array.from(el.attributes || []).forEach((attr) => {
                    const name = String(attr.name || '').toLowerCase();
                    const value = String(attr.value || '').trim().toLowerCase();
                    if (name.startsWith('on')) el.removeAttribute(attr.name);
                    if ((name === 'href' || name === 'src') && (value.startsWith('javascript:') || value.startsWith('data:text/html'))) {
                        el.removeAttribute(attr.name);
                    }
                });
                walk(el);
            });
        };
        walk(template.content);
        return template.innerHTML;
    } catch (e) {
        return "";
    }
};

const WIKI_TAG_OPTIONS = [
    'Red/IP', 'ST 2110', 'Dante/AES67', 'NDI', 'Intercom', 'Audio', 'Vídeo',
    'Servidores', 'Avid', 'Grafismo', 'Playout', 'Routing', 'Seguridad',
    'Incidencia', 'Configuración', 'Material instalado', 'Pendiente de revisar',
    'Cliente', 'Otro'
];

const getProjectWikiData = (project) => {
    const wiki = project && project.wiki;
    if (typeof wiki === 'string') {
        return { content: wiki, tags: [], updatedAt: '' };
    }
    if (wiki && typeof wiki === 'object') {
        return {
            ...wiki,
            content: typeof wiki.content === 'string' ? wiki.content : '',
            tags: Array.isArray(wiki.tags) ? wiki.tags.filter(Boolean) : [],
            updatedAt: typeof wiki.updatedAt === 'string' ? wiki.updatedAt : ''
        };
    }
    return { content: '', tags: [], updatedAt: '' };
};

const getProjectTitle = (project) => ((project && project.meta && project.meta.titulo) || 'Proyecto sin título');
const getProjectClient = (project) => ((project && project.meta && project.meta.cliente) || '');
const getProjectStatus = (project) => normalizeProjectEstado(project && project.meta && project.meta.estado);

const stripWikiHtml = (html) => {
    try {
        const template = document.createElement('template');
        template.innerHTML = sanitizeWikiHtml(html || '');
        return (template.content.textContent || '').replace(/\s+/g, ' ').trim();
    } catch (e) {
        return String(html || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    }
};

const hasWikiDocumentation = (project) => stripWikiHtml(getProjectWikiData(project).content).length > 0;

const formatWikiDate = (value) => {
    if (!value) return 'Sin datos';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return 'Sin datos';
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
};

const buildWikiExcerpt = (project) => {
    const text = stripWikiHtml(getProjectWikiData(project).content);
    if (!text) return 'Este proyecto todavía no tiene wiki.';
    return text.length > 190 ? text.slice(0, 190).trim() + '...' : text;
};

// --- VISTA: WIKI DE PROYECTO (VER / EDITAR como ProjectEditor) ---
const ProjectWiki = ({ project, onSave, onBack, isSaving }) => {
  // "view" = solo lectura, "edit" = editable
  const [mode, setMode] = React.useState('view');
  const [hasChanges, setHasChanges] = React.useState(false);
  const [selectedTags, setSelectedTags] = React.useState(() => getProjectWikiData(project).tags);

  // Referencias a Quill
  const editorHostRef = React.useRef(null);
  const quillRef = React.useRef(null);
  const lastRangeRef = React.useRef(null);

  // Helper: obtener HTML guardado
  const getStoredHtml = () => {
    const html = getProjectWikiData(project).content;
    return sanitizeWikiHtml(html || "");
  };

  // Inicializar Quill una sola vez
  React.useEffect(() => {
    if (!editorHostRef.current) return;
    if (quillRef.current) return;

    if (!window.Quill) {
      console.error("Quill no está cargado. Revisa index.html (las líneas de Quill).");
      return;
    }

    quillRef.current = new window.Quill(editorHostRef.current, {
      theme: "snow",
      modules: {
        toolbar: [
          ["bold", "italic", "underline"],
          [{ header: [1, 2, false] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["clean"]
        ]
      }
    });
    // 1) Recordar la última selección válida
quillRef.current.on("selection-change", (range) => {
  if (range) lastRangeRef.current = range;
});

// 2) Evitar que la barra de herramientas robe el foco (y se pierda la selección)
const toolbar = quillRef.current.getModule("toolbar")?.container;
if (toolbar) {
  toolbar.addEventListener("mousedown", (e) => {
    // Evita que el click quite el foco al editor
    e.preventDefault();

    // Y restaura la selección si existe
    if (lastRangeRef.current) {
      quillRef.current.setSelection(lastRangeRef.current);
    }
  });
}
// Si el editor pierde foco, guardamos el último rango igualmente
quillRef.current.root.addEventListener("keyup", () => {
  const r = quillRef.current.getSelection();
  if (r) lastRangeRef.current = r;
});
quillRef.current.root.addEventListener("mouseup", () => {
  const r = quillRef.current.getSelection();
  if (r) lastRangeRef.current = r;
});

    // Cargar contenido y dejar en modo lectura al inicio
    quillRef.current.root.innerHTML = getStoredHtml();
    quillRef.current.enable(false); // <- importante: empieza BLOQUEADO (modo view)

    // Detectar cambios
    quillRef.current.on("text-change", () => {
      setHasChanges(true);
    });
  }, []);

  // Si cambias de proyecto, recarga contenido y vuelve a modo vista
  React.useEffect(() => {
    setMode('view');
    setHasChanges(false);
    setSelectedTags(getProjectWikiData(project).tags);
    if (quillRef.current) {
      quillRef.current.root.innerHTML = getStoredHtml();
      quillRef.current.enable(false);
    }
  }, [project && project.id]);

  const handleEdit = () => {
    setMode('edit');
    setHasChanges(false);
    setSelectedTags(getProjectWikiData(project).tags);
    if (quillRef.current) quillRef.current.enable(true);
  };

  const handleCancelEdit = () => {
    // Descarta cambios y vuelve a lo guardado
    setMode('view');
    setHasChanges(false);
    setSelectedTags(getProjectWikiData(project).tags);
    if (quillRef.current) {
      quillRef.current.root.innerHTML = getStoredHtml();
      quillRef.current.enable(false);
    }
  };

  const handleSave = async () => {
    const html = sanitizeWikiHtml(quillRef.current ? quillRef.current.root.innerHTML : "");
    const currentWiki = getProjectWikiData(project);
    const updated = {
      ...project,
      wiki: { ...currentWiki, content: html, tags: selectedTags, updatedAt: new Date().toISOString() }
    };
    await onSave(addActivityToProject(updated, "Wiki actualizada", "wiki"));

    // Tras guardar: modo vista
    setMode('view');
    setHasChanges(false);
    if (quillRef.current) quillRef.current.enable(false);
  };

  const toggleTag = (tag) => {
    if (mode !== 'edit') return;
    setSelectedTags((prev) => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
    setHasChanges(true);
  };

  // En modo "view" ocultamos toolbar con estilo inline (sin tocar CSS)
  const toolbarStyle = (mode === 'view')
    ? { display: 'none' }
    : {};
  const wikiData = getProjectWikiData(project);
  const documented = hasWikiDocumentation(project);

  // Render principal
  return (
    React.createElement("div", null,

      // Barra superior (misma filosofía que ProjectEditor)
      React.createElement("div", {
        className: "bg-white border-b border-gray-200 sticky top-0 z-20 px-6 py-3 flex justify-between items-center shadow-sm no-print"
      },
        React.createElement("div", { className: "flex items-center gap-4" },
          React.createElement("button", {
            type: "button",
            onClick: onBack,
            className: "text-gray-500 hover:text-gray-800 flex items-center gap-2 text-sm font-medium"
          },
            React.createElement("i", { className: "fas fa-arrow-left" }),
            React.createElement("span", { className: "hidden sm:inline" }, "Volver al proyecto")
          ),
          React.createElement("div", { className: "h-6 w-px bg-gray-200" }),
          React.createElement("div", null,
            React.createElement("div", { className: "font-semibold text-gray-800" }, "Wiki del proyecto"),
            React.createElement("div", { className: "text-xs text-gray-500" }, "Documentación técnica y notas de campo.")
          )
        ),

        React.createElement("div", { className: "flex items-center gap-2" },

          // Botón Editar / Ver (como el de ProjectEditor)
          (mode === 'view')
            ? React.createElement("button", {
                type: "button",
                onClick: handleEdit,
                className: "px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2 shadow-sm"
              },
                React.createElement("i", { className: "fas fa-pen" }),
                React.createElement("span", { className: "hidden sm:inline" }, "Editar")
              )
            : React.createElement("button", {
                type: "button",
                onClick: handleCancelEdit,
                className: "px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-2 shadow-sm"
              },
                React.createElement("i", { className: "fas fa-eye" }),
                React.createElement("span", { className: "hidden sm:inline" }, "Ver")
              ),

          // Guardar: solo en modo edit
          (mode === 'edit') && React.createElement("button", {
            type: "button",
            onClick: handleSave,
            disabled: isSaving || !hasChanges,
            className: `px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${
              hasChanges ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`
          },
            isSaving
              ? React.createElement("i", { className: "fas fa-circle-notch fa-spin" })
              : React.createElement("i", { className: "fas fa-save" }),
            React.createElement("span", { className: "hidden sm:inline" }, isSaving ? "Guardando..." : "Guardar")
          )
        )
      ),

      // Contenido
      React.createElement("div", { className: "max-w-5xl mx-auto p-6" },
        React.createElement("div", { className: "wiki-project-summary" },
          React.createElement("div", { className: "wiki-project-summary-main" },
            React.createElement("span", { className: "wiki-card-status" }, getProjectStatus(project)),
            React.createElement("h1", null, getProjectTitle(project)),
            React.createElement("p", null, documented ? "Wiki documentada y disponible en la base global de conocimiento." : "Este proyecto todavía no tiene wiki.")
          ),
          React.createElement("div", { className: "wiki-project-summary-meta" },
            React.createElement("span", null, "Última actualización"),
            React.createElement("strong", null, formatWikiDate(wikiData.updatedAt))
          )
        ),
        React.createElement("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" },
          React.createElement("div", { className: "px-6 py-4 border-b border-gray-200 bg-gray-50" },
            React.createElement("div", { className: "font-semibold text-gray-800" }, mode === 'view' ? "Vista" : "Edición"),
            React.createElement("div", { className: "text-xs text-gray-500 mt-1" },
              mode === 'view'
                ? "Pulsa “Editar” para modificar."
                : "Usa la barra para negrita, listas y títulos."
            )
          ),

          React.createElement("div", { className: "wiki-tag-panel" },
            React.createElement("div", { className: "wiki-tag-panel-head" },
              React.createElement("div", null,
                React.createElement("div", { className: "wiki-tag-title" }, "Categorías técnicas"),
                React.createElement("div", { className: "wiki-tag-subtitle" }, mode === 'edit' ? "Selecciona una o varias categorías para clasificar esta wiki." : "Pulsa Editar para modificar las categorías.")
              )
            ),
            React.createElement("div", { className: "wiki-tag-cloud" },
              WIKI_TAG_OPTIONS.map(tag => React.createElement("button", {
                key: tag,
                type: "button",
                disabled: mode !== 'edit',
                onClick: () => toggleTag(tag),
                className: "wiki-tag-chip" + (selectedTags.includes(tag) ? " selected" : "") + (mode !== 'edit' ? " disabled" : "")
              }, tag))
            )
          ),

          // Zona Quill
          React.createElement("div", { className: "p-4" },
            // Truco: cuando está en view, escondemos la toolbar que Quill crea (ql-toolbar)
            React.createElement("div", {
              style: {},
              ref: (el) => {
                // editorHostRef se usa para montar Quill; el toolbar lo crea Quill como hermano previo
                editorHostRef.current = el;
                // Ocultar toolbar si existe
                setTimeout(() => {
                  try {
                    const host = el;
                    if (!host) return;
                    const toolbar = host.parentElement ? host.parentElement.querySelector('.ql-toolbar') : null;
                    if (toolbar) toolbar.style.display = (mode === 'view') ? 'none' : '';
                  } catch(e) {}
                }, 0);
              },
              // En modo view, cursor normal. En modo edit, cursor texto.
              className: (mode === 'view') ? "cursor-default" : "cursor-text",
              style: { minHeight: "420px" }
            })
          )
        )
      )
    )
  );
};

// ─── VISTA: USUARIOS ─────────────────────────────────────────────────────────
const ProjectWikiGlobalView = ({ projects, onOpenWiki, onOpenProjects }) => {
    const [query, setQuery] = React.useState('');
    const [projectId, setProjectId] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [tag, setTag] = React.useState('');
    const [dateFilter, setDateFilter] = React.useState('');

    const wikiRows = React.useMemo(() => {
        return (Array.isArray(projects) ? projects : []).map(project => {
            const wiki = getProjectWikiData(project);
            const text = stripWikiHtml(wiki.content);
            const documented = text.length > 0;
            const searchBlob = [
                getProjectTitle(project),
                getProjectClient(project),
                getProjectStatus(project),
                text,
                (wiki.tags || []).join(' '),
                project && project.meta ? JSON.stringify(project.meta) : ''
            ].join(' ').toLowerCase();
            return { project, wiki, text, documented, searchBlob };
        });
    }, [projects]);

    const latestUpdate = React.useMemo(() => {
        const dates = wikiRows
            .map(row => row.wiki.updatedAt ? new Date(row.wiki.updatedAt) : null)
            .filter(date => date && !Number.isNaN(date.getTime()))
            .sort((a, b) => b - a);
        return dates[0] ? dates[0].toISOString() : '';
    }, [wikiRows]);

    const filteredRows = React.useMemo(() => {
        const q = query.trim().toLowerCase();
        const now = new Date();
        return wikiRows.filter(row => {
            if (q && !row.searchBlob.includes(q)) return false;
            if (projectId && String(row.project.id) !== String(projectId)) return false;
            if (status && getProjectStatus(row.project) !== status) return false;
            if (tag && !(row.wiki.tags || []).includes(tag)) return false;
            if (dateFilter) {
                const date = row.wiki.updatedAt ? new Date(row.wiki.updatedAt) : null;
                if (dateFilter === 'none') return !date || Number.isNaN(date.getTime());
                if (!date || Number.isNaN(date.getTime())) return false;
                const days = dateFilter === '7' ? 7 : 30;
                const limit = new Date(now);
                limit.setDate(limit.getDate() - days);
                if (date < limit) return false;
            }
            return true;
        });
    }, [wikiRows, query, projectId, status, tag, dateFilter]);

    const documentedCount = wikiRows.filter(row => row.documented).length;
    const emptyCount = wikiRows.length - documentedCount;
    const clearFilters = () => {
        setQuery('');
        setProjectId('');
        setStatus('');
        setTag('');
        setDateFilter('');
    };
    const statuses = ['En Ejecución', 'En Revisión', 'Completado', 'En Pausa'];

    return React.createElement('div', { className: 'wiki-global-page' },
        React.createElement('div', { className: 'wiki-global-header' },
            React.createElement('div', null,
                React.createElement('h1', null, 'Wiki de proyectos'),
                React.createElement('p', null, 'Documentación técnica, notas de campo y aprendizajes por proyecto.')
            ),
            React.createElement('div', { className: 'wiki-global-actions' },
                React.createElement('button', { type: 'button', className: 'btn-apple-primary no-print', onClick: onOpenProjects },
                    React.createElement('i', { className: 'fas fa-folder-open' }),
                    'Ver proyectos')
            )
        ),
        React.createElement('div', { className: 'wiki-kpi-grid' },
            React.createElement('div', { className: 'wiki-kpi-card' }, React.createElement('span', null, 'Proyectos documentados'), React.createElement('strong', null, documentedCount)),
            React.createElement('div', { className: 'wiki-kpi-card warn' }, React.createElement('span', null, 'Proyectos sin documentación'), React.createElement('strong', null, emptyCount)),
            React.createElement('div', { className: 'wiki-kpi-card' }, React.createElement('span', null, 'Total de notas/wiki'), React.createElement('strong', null, documentedCount)),
            React.createElement('div', { className: 'wiki-kpi-card' }, React.createElement('span', null, 'Última actualización'), React.createElement('strong', null, formatWikiDate(latestUpdate)))
        ),
        React.createElement('div', { className: 'wiki-search-panel' },
            React.createElement('div', { className: 'wiki-search-box' },
                React.createElement('i', { className: 'fas fa-magnifying-glass' }),
                React.createElement('input', { value: query, onChange: e => setQuery(e.target.value), placeholder: 'Buscar en documentación, incidencias, configuraciones...' })
            ),
            React.createElement('div', { className: 'wiki-filter-grid' },
                React.createElement('select', { value: projectId, onChange: e => setProjectId(e.target.value) },
                    React.createElement('option', { value: '' }, 'Todos los proyectos'),
                    wikiRows.map(row => React.createElement('option', { key: row.project.id, value: row.project.id }, getProjectTitle(row.project)))
                ),
                React.createElement('select', { value: status, onChange: e => setStatus(e.target.value) },
                    React.createElement('option', { value: '' }, 'Todos los estados'),
                    statuses.map(item => React.createElement('option', { key: item, value: item }, item))
                ),
                React.createElement('select', { value: tag, onChange: e => setTag(e.target.value) },
                    React.createElement('option', { value: '' }, 'Todas las categorías'),
                    WIKI_TAG_OPTIONS.map(item => React.createElement('option', { key: item, value: item }, item))
                ),
                React.createElement('select', { value: dateFilter, onChange: e => setDateFilter(e.target.value) },
                    React.createElement('option', { value: '' }, 'Cualquier fecha'),
                    React.createElement('option', { value: '7' }, 'Actualizado últimos 7 días'),
                    React.createElement('option', { value: '30' }, 'Actualizado últimos 30 días'),
                    React.createElement('option', { value: 'none' }, 'Sin fecha')
                ),
                React.createElement('button', { type: 'button', className: 'wiki-clear-btn', onClick: clearFilters },
                    React.createElement('i', { className: 'fas fa-filter-circle-xmark' }),
                    'Limpiar filtros')
            )
        ),
        React.createElement('div', { className: 'wiki-results-head' },
            React.createElement('span', null, `${filteredRows.length} resultado${filteredRows.length === 1 ? '' : 's'}`),
            emptyCount > 0 ? React.createElement('span', { className: 'wiki-empty-hint' }, `${emptyCount} proyecto${emptyCount === 1 ? '' : 's'} sin documentación`) : null
        ),
        filteredRows.length > 0
            ? React.createElement('div', { className: 'wiki-card-grid' },
                filteredRows.map(row => React.createElement('article', { key: row.project.id, className: 'wiki-card' + (row.documented ? '' : ' empty') },
                    React.createElement('div', { className: 'wiki-card-top' },
                        React.createElement('div', { className: 'wiki-card-title-wrap' },
                            React.createElement('span', { className: 'wiki-card-eyebrow' }, getProjectClient(row.project) || 'Sin cliente'),
                            React.createElement('h2', { title: getProjectTitle(row.project) }, getProjectTitle(row.project))
                        ),
                        React.createElement('span', { className: 'wiki-card-status' }, getProjectStatus(row.project))
                    ),
                    React.createElement('p', { className: 'wiki-card-excerpt' }, buildWikiExcerpt(row.project)),
                    React.createElement('div', { className: 'wiki-card-tags' },
                        (row.wiki.tags && row.wiki.tags.length)
                            ? row.wiki.tags.slice(0, 5).map(item => React.createElement('span', { key: item }, item))
                            : React.createElement('span', { className: 'muted' }, 'Sin categorías')
                    ),
                    React.createElement('div', { className: 'wiki-card-footer' },
                        React.createElement('div', { className: 'wiki-card-meta' },
                            React.createElement('i', { className: row.documented ? 'fas fa-circle-check' : 'fas fa-circle-info' }),
                            React.createElement('span', null, row.documented ? 'Documentada' : 'Sin documentación'),
                            React.createElement('span', null, formatWikiDate(row.wiki.updatedAt))
                        ),
                        React.createElement('button', { type: 'button', onClick: () => onOpenWiki(row.project), className: 'wiki-open-btn' },
                            React.createElement('i', { className: 'fas fa-arrow-up-right-from-square' }),
                            'Ver wiki')
                    )
                ))
            )
            : React.createElement('div', { className: 'wiki-no-results' },
                React.createElement('i', { className: 'fas fa-book-open' }),
                React.createElement('h2', null, 'Sin resultados'),
                React.createElement('p', null, 'Prueba a limpiar filtros o buscar por otro término técnico.')
            )
    );
};

const UsersView = () =>
    React.createElement('div', { className: 'sb-page' },
        React.createElement('div', { className: 'sb-page-header' },
            React.createElement('h1', { className: 'sb-page-title' }, 'Usuarios'),
            React.createElement('p', { className: 'sb-page-sub' }, 'Gestión de accesos y roles del equipo')
        ),
        React.createElement('div', { className: 'sb-placeholder' },
            React.createElement('div', { className: 'sb-placeholder-icon' },
                React.createElement('i', { className: 'fas fa-user-group' })),
            React.createElement('h2', { className: 'sb-placeholder-title' }, 'Gestión de usuarios'),
            React.createElement('p', { className: 'sb-placeholder-text' },
                'La administración de usuarios y roles estará disponible próximamente. Aquí podrás gestionar el acceso al panel, asignar permisos y ver la actividad por persona.'),
            React.createElement('span', { className: 'sb-placeholder-badge' }, 'Próximamente')
        )
    );

const ImportView = ({ onImport }) =>
    React.createElement('div', { className: 'sb-page' },
        React.createElement('div', { className: 'sb-page-header' },
            React.createElement('h1', { className: 'sb-page-title' }, 'Importar'),
            React.createElement('p', { className: 'sb-page-sub' }, 'Restauración de backups de proyectos Unitecnic')
        ),
        React.createElement('div', { className: 'sb-placeholder' },
            React.createElement('div', { className: 'sb-placeholder-icon' },
                React.createElement('i', { className: 'fas fa-file-arrow-up' })),
            React.createElement('h2', { className: 'sb-placeholder-title' }, 'Importar backup JSON'),
            React.createElement('p', { className: 'sb-placeholder-text' },
                'Selecciona un backup exportado desde esta aplicación. Antes de sobrescribir los datos actuales se mostrará una confirmación.'),
            React.createElement('button', { type: 'button', className: 'btn-apple-primary no-print', onClick: onImport },
                React.createElement('i', { className: 'fas fa-file-arrow-up' }),
                'Seleccionar archivo')
        )
    );

// ─── VISTA: PERFIL ────────────────────────────────────────────────────────────
const TIME_ALLOWANCE_TYPES = ['Ninguna', 'Desayuno', 'Comida', 'Cena', 'Media dieta', 'Dieta completa', 'Alojamiento', 'Otro'];

const getProjectTimeEntries = (project) => Array.isArray(project && project.timeEntries) ? project.timeEntries : [];
const toNumberOrZero = (value) => {
    const n = Number(value);
    return Number.isFinite(n) ? n : 0;
};
const getCurrentDateInput = () => {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};
const flattenTimeEntries = (projects) => {
    const rows = [];
    (Array.isArray(projects) ? projects : []).forEach(project => {
        getProjectTimeEntries(project).forEach(entry => {
            rows.push({
                ...entry,
                projectId: project.id,
                projectTitle: (project.meta && project.meta.titulo) || 'Proyecto sin titulo'
            });
        });
    });
    return rows.sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
};
const isSameMonth = (dateStr, now) => {
    const d = parseDateOnly(dateStr);
    return !!d && d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
};
const isSameWeek = (dateStr, now) => {
    const d = parseDateOnly(dateStr);
    if (!d) return false;
    const start = new Date(now);
    const day = (start.getDay() + 6) % 7;
    start.setDate(start.getDate() - day);
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setDate(start.getDate() + 7);
    return d >= start && d < end;
};

const TimeEntryModal = ({ projects, entry, lockedProjectId, onClose, onSave }) => {
    const firstProjectId = lockedProjectId || (projects[0] && projects[0].id) || '';
    const [form, setForm] = React.useState(() => ({
        date: (entry && entry.date) || getCurrentDateInput(),
        projectId: (entry && entry.projectId) || firstProjectId,
        user: (entry && entry.user) || '',
        hours: (entry && entry.hours) || '',
        allowanceType: (entry && entry.allowanceType) || 'Ninguna',
        allowanceAmount: (entry && entry.allowanceAmount) || '',
        mileageKm: (entry && entry.mileageKm) || '',
        notes: (entry && entry.notes) || ''
    }));
    const setField = (field, value) => setForm(prev => ({ ...prev, [field]: value }));
    const submit = (e) => {
        e.preventDefault();
        if (!form.projectId) { alert('Selecciona un proyecto.'); return; }
        if (!form.date) { alert('Indica una fecha.'); return; }
        onSave({
            projectId: lockedProjectId || form.projectId,
            previousProjectId: entry && entry.projectId,
            entryId: entry && entry.id,
            values: {
                date: form.date,
                user: form.user.trim(),
                hours: toNumberOrZero(form.hours),
                allowanceType: form.allowanceType,
                allowanceAmount: toNumberOrZero(form.allowanceAmount),
                mileageKm: toNumberOrZero(form.mileageKm),
                notes: form.notes.trim()
            }
        });
    };
    return React.createElement('div', { className: 'modal-overlay no-print', role: 'dialog', 'aria-modal': 'true' },
        React.createElement('form', { className: 'modal-card imput-modal', onSubmit: submit },
            React.createElement('div', { className: 'modal-title' }, entry ? 'Editar imputacion' : 'Nueva imputacion'),
            React.createElement('div', { className: 'modal-subtitle' }, 'Registra horas, dietas y kilometraje asociados a un proyecto.'),
            React.createElement('div', { className: 'imput-form-grid' },
                React.createElement('label', null, 'Fecha', React.createElement('input', { type: 'date', value: form.date, onChange: e => setField('date', e.target.value), required: true })),
                React.createElement('label', null, 'Proyecto', React.createElement('select', { value: lockedProjectId || form.projectId, onChange: e => setField('projectId', e.target.value), disabled: !!lockedProjectId, required: true },
                    React.createElement('option', { value: '' }, 'Selecciona proyecto'),
                    projects.map(p => React.createElement('option', { key: p.id, value: p.id }, (p.meta && p.meta.titulo) || 'Proyecto sin titulo')))),
                React.createElement('label', null, 'Persona', React.createElement('input', { type: 'text', value: form.user, onChange: e => setField('user', e.target.value), placeholder: 'Nombre' })),
                React.createElement('label', null, 'Horas', React.createElement('input', { type: 'number', min: '0', step: '0.25', value: form.hours, onChange: e => setField('hours', e.target.value) })),
                React.createElement('label', null, 'Tipo de dieta', React.createElement('select', { value: form.allowanceType, onChange: e => setField('allowanceType', e.target.value) },
                    TIME_ALLOWANCE_TYPES.map(t => React.createElement('option', { key: t, value: t }, t)))),
                React.createElement('label', null, 'Importe dieta', React.createElement('input', { type: 'number', min: '0', step: '0.01', value: form.allowanceAmount, onChange: e => setField('allowanceAmount', e.target.value) })),
                React.createElement('label', null, 'Kilometros', React.createElement('input', { type: 'number', min: '0', step: '0.1', value: form.mileageKm, onChange: e => setField('mileageKm', e.target.value) })),
                React.createElement('label', { className: 'imput-form-wide' }, 'Observaciones', React.createElement('textarea', { rows: 3, value: form.notes, onChange: e => setField('notes', e.target.value), placeholder: 'Comentario opcional' }))
            ),
            React.createElement('div', { className: 'modal-actions' },
                React.createElement('button', { type: 'button', className: 'btn-apple', onClick: onClose }, 'Cancelar'),
                React.createElement('button', { type: 'submit', className: 'btn-apple-primary' }, entry ? 'Guardar cambios' : 'Crear imputacion'))));
};

const TimeEntriesTable = ({ rows, onEdit, onDelete, compact }) =>
    rows.length === 0
        ? React.createElement('div', { className: 'imput-empty' },
            React.createElement('i', { className: 'fas fa-clock' }),
            React.createElement('strong', null, 'Sin imputaciones'),
            React.createElement('span', null, 'Aun no hay horas, dietas o kilometros registrados.'))
        : React.createElement('div', { className: 'imput-table-wrap' },
            React.createElement('table', { className: 'imput-table' },
                React.createElement('thead', null, React.createElement('tr', null,
                    React.createElement('th', null, 'Fecha'),
                    !compact && React.createElement('th', null, 'Proyecto'),
                    React.createElement('th', null, 'Persona'),
                    React.createElement('th', null, 'Horas'),
                    React.createElement('th', null, 'Dieta'),
                    React.createElement('th', null, 'Importe'),
                    React.createElement('th', null, 'Km'),
                    React.createElement('th', null, 'Observaciones'),
                    React.createElement('th', null, 'Acciones'))),
                React.createElement('tbody', null, rows.map(row => React.createElement('tr', { key: row.id },
                    React.createElement('td', null, window.formatFechaES ? window.formatFechaES(row.date) : row.date),
                    !compact && React.createElement('td', null, row.projectTitle),
                    React.createElement('td', null, row.user || '-'),
                    React.createElement('td', null, toNumberOrZero(row.hours).toLocaleString('es-ES')),
                    React.createElement('td', null, row.allowanceType || 'Ninguna'),
                    React.createElement('td', null, `${toNumberOrZero(row.allowanceAmount).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`),
                    React.createElement('td', null, toNumberOrZero(row.mileageKm).toLocaleString('es-ES')),
                    React.createElement('td', null, row.notes || '-'),
                    React.createElement('td', { className: 'imput-actions' },
                        React.createElement('button', { type: 'button', onClick: () => onEdit(row), title: 'Editar' }, React.createElement('i', { className: 'fas fa-pen' })),
                        React.createElement('button', { type: 'button', onClick: () => onDelete(row.projectId, row.id), title: 'Eliminar' }, React.createElement('i', { className: 'fas fa-trash' }))))))));

const ImputationsView = ({ projects, onBack, onCreate, onEdit, onDelete }) => {
    const rows = React.useMemo(() => flattenTimeEntries(projects), [projects]);
    const now = new Date();
    const hoursMonth = rows.filter(r => isSameMonth(r.date, now)).reduce((sum, r) => sum + toNumberOrZero(r.hours), 0);
    const hoursWeek = rows.filter(r => isSameWeek(r.date, now)).reduce((sum, r) => sum + toNumberOrZero(r.hours), 0);
    const kmMonth = rows.filter(r => isSameMonth(r.date, now)).reduce((sum, r) => sum + toNumberOrZero(r.mileageKm), 0);
    const allowanceMonth = rows.filter(r => isSameMonth(r.date, now)).reduce((sum, r) => sum + toNumberOrZero(r.allowanceAmount), 0);
    const kpis = [
        ['Horas este mes', hoursMonth.toLocaleString('es-ES'), 'fa-clock'],
        ['Horas esta semana', hoursWeek.toLocaleString('es-ES'), 'fa-calendar-week'],
        ['Kilometros este mes', kmMonth.toLocaleString('es-ES'), 'fa-route'],
        ['Dietas este mes', `${allowanceMonth.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`, 'fa-utensils']
    ];
    return React.createElement('div', { className: 'sb-page imput-page' },
        React.createElement('div', { className: 'sb-page-header imput-header' },
            React.createElement('div', null,
                React.createElement('button', { type: 'button', className: 'btn-apple no-print', onClick: onBack },
                    React.createElement('i', { className: 'fas fa-arrow-left' }), ' Volver'),
                React.createElement('h1', { className: 'sb-page-title' }, 'Imputaciones'),
                React.createElement('p', { className: 'sb-page-sub' }, 'Registro de horas, dietas y kilometraje por proyecto.')),
            React.createElement('button', { type: 'button', className: 'btn-apple-primary no-print', onClick: () => onCreate(null) },
                React.createElement('i', { className: 'fas fa-plus' }), ' Nueva imputacion')),
        React.createElement('div', { className: 'imput-kpis' },
            kpis.map(k => React.createElement('article', { className: 'imput-kpi', key: k[0] },
                React.createElement('i', { className: 'fas ' + k[2] }),
                React.createElement('span', null, k[0]),
                React.createElement('strong', null, k[1])))),
        React.createElement('section', { className: 'imput-card' },
            React.createElement('div', { className: 'imput-card-head' },
                React.createElement('div', null,
                    React.createElement('h2', null, 'Listado de imputaciones'),
                    React.createElement('p', null, `${rows.length} registro${rows.length === 1 ? '' : 's'}`))),
            React.createElement(TimeEntriesTable, { rows: rows, onEdit: onEdit, onDelete: onDelete })));
};

const ProjectTimeEntriesPanel = ({ project, onAdd, onEdit, onDelete }) => {
    const rows = flattenTimeEntries([project]);
    const totals = rows.reduce((acc, row) => {
        acc.hours += toNumberOrZero(row.hours);
        acc.km += toNumberOrZero(row.mileageKm);
        acc.allowance += toNumberOrZero(row.allowanceAmount);
        return acc;
    }, { hours: 0, km: 0, allowance: 0 });
    return React.createElement('section', { className: 'imput-card project-imput-card no-print' },
        React.createElement('div', { className: 'imput-card-head' },
            React.createElement('div', null,
                React.createElement('h2', null, 'Imputaciones'),
                React.createElement('p', null, 'Horas, dietas y kilometraje registrados en este proyecto.')),
            React.createElement('button', { type: 'button', className: 'btn-apple-primary', onClick: () => onAdd(project.id) },
                React.createElement('i', { className: 'fas fa-plus' }), ' Añadir imputacion')),
        React.createElement('div', { className: 'imput-project-totals' },
            React.createElement('span', null, React.createElement('strong', null, totals.hours.toLocaleString('es-ES')), ' horas'),
            React.createElement('span', null, React.createElement('strong', null, totals.km.toLocaleString('es-ES')), ' km'),
            React.createElement('span', null, React.createElement('strong', null, `${totals.allowance.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`), ' dietas')),
        React.createElement(TimeEntriesTable, { rows: rows, compact: true, onEdit: onEdit, onDelete: onDelete }));
};

const getImputMonthKey = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
const getImputMonthLabel = (monthKey) => {
    const [year, month] = String(monthKey || getImputMonthKey()).split('-').map(Number);
    return new Date(year, (month || 1) - 1, 1).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
};
const addImputMonths = (monthKey, delta) => {
    const [year, month] = String(monthKey || getImputMonthKey()).split('-').map(Number);
    return getImputMonthKey(new Date(year, ((month || 1) - 1) + delta, 1));
};
const getImputMonthDays = (monthKey) => {
    const [year, month] = String(monthKey || getImputMonthKey()).split('-').map(Number);
    const first = new Date(year, (month || 1) - 1, 1);
    const total = new Date(year, month || 1, 0).getDate();
    const leading = (first.getDay() + 6) % 7;
    const days = [];
    for (let i = 0; i < leading; i++) days.push(null);
    for (let d = 1; d <= total; d++) days.push(`${year}-${String(month || 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`);
    while (days.length % 7 !== 0) days.push(null);
    return days;
};
const imputCsvEscape = (value) => `"${String(value ?? '').replace(/"/g, '""')}"`;

const AdvancedTimeEntryModal = ({ projects, entry, lockedProjectId, initialDate, onClose, onSave }) => {
    const firstProjectId = lockedProjectId || (projects[0] && projects[0].id) || '';
    const [form, setForm] = React.useState(() => ({
        date: (entry && entry.date) || initialDate || getCurrentDateInput(),
        projectId: (entry && entry.projectId) || firstProjectId,
        user: (entry && entry.user) || '',
        hours: (entry && entry.hours) || '',
        allowanceType: (entry && entry.allowanceType) || 'Ninguna',
        allowanceAmount: (entry && entry.allowanceAmount) || '',
        mileageKm: (entry && entry.mileageKm) || '',
        notes: (entry && entry.notes) || ''
    }));
    const setField = (field, value) => setForm(prev => ({ ...prev, [field]: value }));
    const submit = (e) => {
        e.preventDefault();
        const hours = toNumberOrZero(form.hours);
        const allowanceAmount = toNumberOrZero(form.allowanceAmount);
        const mileageKm = toNumberOrZero(form.mileageKm);
        if (!form.projectId) { alert('Selecciona un proyecto.'); return; }
        if (!form.date || !parseDateOnly(form.date)) { alert('Indica una fecha valida.'); return; }
        if (!form.user.trim()) { alert('Indica la persona.'); return; }
        if (hours <= 0) { alert('Las horas deben ser mayores que 0.'); return; }
        if (allowanceAmount < 0) { alert('El importe de dieta no puede ser negativo.'); return; }
        if (mileageKm < 0) { alert('Los kilómetros no pueden ser negativos.'); return; }
        onSave({
            projectId: lockedProjectId || form.projectId,
            previousProjectId: entry && entry.projectId,
            entryId: entry && entry.id,
            values: {
                date: form.date,
                user: form.user.trim(),
                hours,
                allowanceType: form.allowanceType,
                allowanceAmount,
                mileageKm,
                notes: form.notes.trim()
            }
        });
    };
    return React.createElement('div', { className: 'modal-overlay no-print', role: 'dialog', 'aria-modal': 'true' },
        React.createElement('form', { className: 'modal-card imput-modal', onSubmit: submit },
            React.createElement('div', { className: 'modal-title' }, entry ? 'Editar imputación' : 'Nueva imputación'),
            React.createElement('div', { className: 'modal-subtitle' }, 'Registra horas, dietas y kilometraje asociados a un proyecto.'),
            React.createElement('div', { className: 'imput-form-grid' },
                React.createElement('label', null, 'Fecha', React.createElement('input', { type: 'date', value: form.date, onChange: e => setField('date', e.target.value), required: true })),
                React.createElement('label', null, 'Proyecto', React.createElement('select', { value: lockedProjectId || form.projectId, onChange: e => setField('projectId', e.target.value), disabled: !!lockedProjectId, required: true },
                    React.createElement('option', { value: '' }, 'Selecciona proyecto'),
                    projects.map(p => React.createElement('option', { key: p.id, value: p.id }, (p.meta && p.meta.titulo) || 'Proyecto sin titulo')))),
                React.createElement('label', null, 'Persona', React.createElement('input', { type: 'text', value: form.user, onChange: e => setField('user', e.target.value), placeholder: 'Nombre', required: true })),
                React.createElement('label', null, 'Horas', React.createElement('input', { type: 'number', min: '0.25', step: '0.25', value: form.hours, onChange: e => setField('hours', e.target.value), required: true })),
                React.createElement('label', null, 'Tipo de dieta', React.createElement('select', { value: form.allowanceType, onChange: e => setField('allowanceType', e.target.value) },
                    TIME_ALLOWANCE_TYPES.map(t => React.createElement('option', { key: t, value: t }, t)))),
                React.createElement('label', null, 'Importe dieta', React.createElement('input', { type: 'number', min: '0', step: '0.01', value: form.allowanceAmount, onChange: e => setField('allowanceAmount', e.target.value) })),
                React.createElement('label', null, 'Kilometros', React.createElement('input', { type: 'number', min: '0', step: '0.1', value: form.mileageKm, onChange: e => setField('mileageKm', e.target.value) })),
                React.createElement('label', { className: 'imput-form-wide' }, 'Observaciones', React.createElement('textarea', { rows: 3, value: form.notes, onChange: e => setField('notes', e.target.value), placeholder: 'Comentario opcional' }))
            ),
            React.createElement('div', { className: 'modal-actions' },
                React.createElement('button', { type: 'button', className: 'btn-apple', onClick: onClose }, 'Cancelar'),
                React.createElement('button', { type: 'submit', className: 'btn-apple-primary' }, entry ? 'Guardar cambios' : 'Crear imputación'))));
};

const AdvancedTimeEntriesTable = ({ rows, onEdit, onDelete, compact, emptyText }) =>
    rows.length === 0
        ? React.createElement('div', { className: 'imput-empty' },
            React.createElement('i', { className: 'fas fa-clock' }),
            React.createElement('strong', null, 'Sin imputaciones'),
            React.createElement('span', null, emptyText || 'Aún no hay horas, dietas o kilómetros registrados.'))
        : React.createElement('div', { className: 'imput-table-wrap' },
            React.createElement('table', { className: 'imput-table' },
                React.createElement('thead', null, React.createElement('tr', null,
                    React.createElement('th', null, 'Fecha'),
                    !compact && React.createElement('th', null, 'Proyecto'),
                    React.createElement('th', null, 'Persona'),
                    React.createElement('th', null, 'Horas'),
                    React.createElement('th', null, 'Dieta'),
                    React.createElement('th', null, 'Importe'),
                    React.createElement('th', null, 'Km'),
                    React.createElement('th', null, 'Observaciones'),
                    React.createElement('th', null, 'Acciones'))),
                React.createElement('tbody', null, rows.map(row => React.createElement('tr', { key: row.id },
                    React.createElement('td', { 'data-label': 'Fecha' }, window.formatFechaES ? window.formatFechaES(row.date) : row.date),
                    !compact && React.createElement('td', { 'data-label': 'Proyecto' }, row.projectTitle),
                    React.createElement('td', { 'data-label': 'Persona' }, row.user || '-'),
                    React.createElement('td', { 'data-label': 'Horas' }, toNumberOrZero(row.hours).toLocaleString('es-ES')),
                    React.createElement('td', { 'data-label': 'Dieta' }, row.allowanceType || 'Ninguna'),
                    React.createElement('td', { 'data-label': 'Importe' }, `${toNumberOrZero(row.allowanceAmount).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`),
                    React.createElement('td', { 'data-label': 'Km' }, toNumberOrZero(row.mileageKm).toLocaleString('es-ES')),
                    React.createElement('td', { 'data-label': 'Observaciones' }, row.notes || '-'),
                    React.createElement('td', { className: 'imput-actions', 'data-label': 'Acciones' },
                        React.createElement('button', { type: 'button', onClick: () => onEdit(row), title: 'Editar' }, React.createElement('i', { className: 'fas fa-pen' })),
                        React.createElement('button', { type: 'button', onClick: () => onDelete(row.projectId, row.id), title: 'Eliminar' }, React.createElement('i', { className: 'fas fa-trash' }))))))));

const AdvancedImputationsView = ({ projects, onBack, onCreate, onEdit, onDelete }) => {
    const [monthFilter, setMonthFilter] = React.useState(getImputMonthKey());
    const [projectFilter, setProjectFilter] = React.useState('Todos');
    const [personFilter, setPersonFilter] = React.useState('Todos');
    const [allowanceFilter, setAllowanceFilter] = React.useState('Todos');
    const [textFilter, setTextFilter] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState(getCurrentDateInput());
    const rowsAll = React.useMemo(() => flattenTimeEntries(projects), [projects]);
    const people = React.useMemo(() => Array.from(new Set(rowsAll.map(r => r.user).filter(Boolean))).sort((a, b) => a.localeCompare(b, 'es')), [rowsAll]);
    const filteredRows = React.useMemo(() => {
        const q = textFilter.trim().toLowerCase();
        return rowsAll.filter(row => {
            const monthOk = !monthFilter || String(row.date || '').startsWith(monthFilter);
            const projectOk = projectFilter === 'Todos' || String(row.projectId) === String(projectFilter);
            const personOk = personFilter === 'Todos' || row.user === personFilter;
            const allowanceOk = allowanceFilter === 'Todos' || (row.allowanceType || 'Ninguna') === allowanceFilter;
            const textOk = !q || String(row.notes || '').toLowerCase().includes(q);
            return monthOk && projectOk && personOk && allowanceOk && textOk;
        });
    }, [rowsAll, monthFilter, projectFilter, personFilter, allowanceFilter, textFilter]);
    const sumBy = (items, field) => items.reduce((sum, r) => sum + toNumberOrZero(r[field]), 0);
    const now = new Date();
    const hoursPeriod = sumBy(filteredRows, 'hours');
    const hoursWeek = sumBy(filteredRows.filter(r => isSameWeek(r.date, now)), 'hours');
    const kmPeriod = sumBy(filteredRows, 'mileageKm');
    const allowancePeriod = sumBy(filteredRows, 'allowanceAmount');
    const topByHours = (field) => {
        const map = {};
        filteredRows.forEach(r => {
            const key = r[field] || 'Sin datos';
            map[key] = (map[key] || 0) + toNumberOrZero(r.hours);
        });
        return Object.entries(map).sort((a, b) => b[1] - a[1])[0] || ['Sin datos', 0];
    };
    const topProject = topByHours('projectTitle');
    const topPerson = topByHours('user');
    const dayMap = React.useMemo(() => {
        const map = {};
        filteredRows.forEach(row => {
            if (!map[row.date]) map[row.date] = { rows: [], hours: 0, km: 0, allowance: 0 };
            map[row.date].rows.push(row);
            map[row.date].hours += toNumberOrZero(row.hours);
            map[row.date].km += toNumberOrZero(row.mileageKm);
            map[row.date].allowance += toNumberOrZero(row.allowanceAmount);
        });
        return map;
    }, [filteredRows]);
    const selectedRows = filteredRows.filter(r => r.date === selectedDate);
    const selectedTotals = { hours: sumBy(selectedRows, 'hours'), km: sumBy(selectedRows, 'mileageKm'), allowance: sumBy(selectedRows, 'allowanceAmount') };
    const recs = React.useMemo(() => {
        if (!filteredRows.length) return ['No hay imputaciones registradas en el periodo seleccionado.'];
        const list = [];
        if (topPerson[1] > hoursPeriod * 0.5 && filteredRows.length > 1) list.push(`${topPerson[0]} concentra la mayoría de horas imputadas este mes.`);
        const highDays = Object.values(dayMap).filter(v => v.hours > 8).length;
        if (highDays) list.push(`Hay ${highDays} día${highDays === 1 ? '' : 's'} con más de 8 horas imputadas.`);
        if (topProject[1] > 0) list.push(`El proyecto con más horas es ${topProject[0]}.`);
        if (filteredRows.some(r => toNumberOrZero(r.mileageKm) > 0 && !String(r.notes || '').trim())) list.push('Hay kilómetros registrados sin observaciones.');
        if (!list.length) list.push('La carga imputada está repartida de forma equilibrada.');
        return list.slice(0, 4);
    }, [filteredRows, dayMap, topPerson[0], topPerson[1], topProject[0], topProject[1], hoursPeriod]);
    const kpis = [
        ['Horas del periodo', hoursPeriod.toLocaleString('es-ES'), filteredRows.length ? `${filteredRows.length} registros` : 'Sin datos en el periodo', 'fa-clock'],
        ['Horas esta semana', hoursWeek.toLocaleString('es-ES'), 'Según filtros activos', 'fa-calendar-week'],
        ['Km del periodo', kmPeriod.toLocaleString('es-ES'), filteredRows.length ? 'Kilometraje filtrado' : 'Sin datos en el periodo', 'fa-route'],
        ['Dietas del periodo', `${allowancePeriod.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`, 'Importe total', 'fa-utensils'],
        ['Proyecto con más horas', topProject[0], `${toNumberOrZero(topProject[1]).toLocaleString('es-ES')} h`, 'fa-folder-open'],
        ['Persona con más horas', topPerson[0], `${toNumberOrZero(topPerson[1]).toLocaleString('es-ES')} h`, 'fa-user']
    ];
    const clearFilters = () => {
        setMonthFilter(getImputMonthKey());
        setProjectFilter('Todos');
        setPersonFilter('Todos');
        setAllowanceFilter('Todos');
        setTextFilter('');
        setSelectedDate(getCurrentDateInput());
    };
    const exportCSV = () => {
        if (!filteredRows.length) { alert('No hay imputaciones que coincidan con los filtros seleccionados.'); return; }
        const headers = ['Fecha', 'Proyecto', 'Persona', 'Horas', 'Tipo de dieta', 'Importe dieta', 'Kilómetros', 'Observaciones'];
        const rows = filteredRows.map(r => [r.date, r.projectTitle, r.user, r.hours, r.allowanceType || 'Ninguna', r.allowanceAmount, r.mileageKm, r.notes].map(imputCsvEscape).join(';'));
        const blob = new Blob(['\uFEFF' + [headers.map(imputCsvEscape).join(';'), ...rows].join('\r\n')], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `imputaciones_${monthFilter || getImputMonthKey()}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };
    const setMonth = (next) => { const safe = next || getImputMonthKey(); setMonthFilter(safe); setSelectedDate(`${safe}-01`); };
    return React.createElement('div', { className: 'sb-page imput-page' },
        React.createElement('div', { className: 'sb-page-header imput-header' },
            React.createElement('div', null,
                React.createElement('button', { type: 'button', className: 'btn-apple no-print', onClick: onBack }, React.createElement('i', { className: 'fas fa-arrow-left' }), ' Volver'),
                React.createElement('h1', { className: 'sb-page-title' }, 'Imputaciones'),
                React.createElement('p', { className: 'sb-page-sub' }, 'Registro de horas, dietas y kilometraje por proyecto.')),
            React.createElement('div', { className: 'imput-header-actions no-print' },
                React.createElement('button', { type: 'button', className: 'btn-apple', onClick: exportCSV }, React.createElement('i', { className: 'fas fa-file-csv' }), ' Exportar CSV'),
                React.createElement('button', { type: 'button', className: 'btn-apple-primary', onClick: () => onCreate(null, null, selectedDate) }, React.createElement('i', { className: 'fas fa-plus' }), ' Nueva imputación'))),
        projects.length === 0 && React.createElement('div', { className: 'imput-empty imput-empty--top' }, 'No hay proyectos disponibles para imputar horas.'),
        React.createElement('section', { className: 'imput-card imput-filters no-print' },
            React.createElement('label', null, 'Mes', React.createElement('input', { type: 'month', value: monthFilter, onChange: e => setMonth(e.target.value) })),
            React.createElement('label', null, 'Proyecto', React.createElement('select', { value: projectFilter, onChange: e => setProjectFilter(e.target.value) }, React.createElement('option', { value: 'Todos' }, 'Todos'), projects.map(p => React.createElement('option', { key: p.id, value: p.id }, (p.meta && p.meta.titulo) || 'Proyecto sin titulo')))),
            React.createElement('label', null, 'Persona', React.createElement('select', { value: personFilter, onChange: e => setPersonFilter(e.target.value) }, React.createElement('option', { value: 'Todos' }, 'Todas'), people.map(p => React.createElement('option', { key: p, value: p }, p)))),
            React.createElement('label', null, 'Tipo de dieta', React.createElement('select', { value: allowanceFilter, onChange: e => setAllowanceFilter(e.target.value) }, React.createElement('option', { value: 'Todos' }, 'Todos'), TIME_ALLOWANCE_TYPES.map(t => React.createElement('option', { key: t, value: t }, t)))),
            React.createElement('label', null, 'Observaciones', React.createElement('input', { type: 'text', value: textFilter, onChange: e => setTextFilter(e.target.value), placeholder: 'Buscar texto...' })),
            React.createElement('button', { type: 'button', className: 'btn-apple', onClick: clearFilters }, 'Limpiar filtros')),
        React.createElement('div', { className: 'imput-kpis imput-kpis--six' }, kpis.map(k => React.createElement('article', { className: 'imput-kpi', key: k[0] }, React.createElement('i', { className: 'fas ' + k[3] }), React.createElement('span', null, k[0]), React.createElement('strong', null, k[1]), React.createElement('small', null, k[2])))),
        React.createElement('section', { className: 'imput-card imput-analysis' }, React.createElement('div', { className: 'imput-card-head' }, React.createElement('div', null, React.createElement('h2', null, 'Análisis de imputaciones'), React.createElement('p', null, 'Lectura rápida según los filtros activos.'))), React.createElement('div', { className: 'imput-recs' }, recs.map((r, i) => React.createElement('div', { className: 'imput-rec', key: i }, React.createElement('i', { className: 'fas fa-lightbulb' }), r)))),
        React.createElement('section', { className: 'imput-card imput-calendar-card' },
            React.createElement('div', { className: 'imput-card-head' }, React.createElement('div', null, React.createElement('h2', null, 'Calendario mensual'), React.createElement('p', null, getImputMonthLabel(monthFilter))), React.createElement('div', { className: 'imput-calendar-actions no-print' }, React.createElement('button', { type: 'button', onClick: () => setMonth(addImputMonths(monthFilter, -1)) }, React.createElement('i', { className: 'fas fa-chevron-left' })), React.createElement('button', { type: 'button', onClick: () => { setMonthFilter(getImputMonthKey()); setSelectedDate(getCurrentDateInput()); } }, 'Mes actual'), React.createElement('button', { type: 'button', onClick: () => setMonth(addImputMonths(monthFilter, 1)) }, React.createElement('i', { className: 'fas fa-chevron-right' })))),
            React.createElement('div', { className: 'imput-calendar-weekdays' }, ['L', 'M', 'X', 'J', 'V', 'S', 'D'].map(d => React.createElement('span', { key: d }, d))),
            React.createElement('div', { className: 'imput-calendar-grid' }, getImputMonthDays(monthFilter).map((date, idx) => {
                const day = date ? dayMap[date] : null;
                const hours = day ? day.hours : 0;
                const tone = !date ? 'empty' : hours > 10 ? 'red' : hours > 8 ? 'amber' : hours >= 6 ? 'green' : hours > 0 ? 'blue' : 'neutral';
                return React.createElement('button', { type: 'button', key: date || `empty-${idx}`, disabled: !date, onClick: () => setSelectedDate(date), className: `imput-day imput-day--${tone} ${selectedDate === date ? 'active' : ''}` }, date && React.createElement('strong', null, Number(date.slice(-2))), date && day && React.createElement(React.Fragment, null, React.createElement('span', null, `${hours.toLocaleString('es-ES')} h`), React.createElement('small', null, `${day.rows.length} registro${day.rows.length === 1 ? '' : 's'}`), React.createElement('em', null, day.km > 0 && React.createElement('i', { className: 'fas fa-car', title: 'Con kilometraje' }), day.allowance > 0 && React.createElement('i', { className: 'fas fa-utensils', title: 'Con dietas' }))));
            }))),
        React.createElement('section', { className: 'imput-card imput-day-panel' }, React.createElement('div', { className: 'imput-card-head' }, React.createElement('div', null, React.createElement('h2', null, 'Imputaciones del día'), React.createElement('p', null, selectedDate ? (window.formatFechaES ? window.formatFechaES(selectedDate) : selectedDate) : 'Selecciona un día')), React.createElement('button', { type: 'button', className: 'btn-apple-primary no-print', onClick: () => onCreate(null, null, selectedDate) }, React.createElement('i', { className: 'fas fa-plus' }), ' Añadir imputación en este día')), React.createElement('div', { className: 'imput-project-totals' }, React.createElement('span', null, React.createElement('strong', null, selectedTotals.hours.toLocaleString('es-ES')), ' horas'), React.createElement('span', null, React.createElement('strong', null, selectedTotals.km.toLocaleString('es-ES')), ' km'), React.createElement('span', null, React.createElement('strong', null, `${selectedTotals.allowance.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`), ' dietas')), React.createElement(AdvancedTimeEntriesTable, { rows: selectedRows, onEdit: onEdit, onDelete: onDelete, emptyText: 'No hay imputaciones registradas para este día.' })),
        React.createElement('section', { className: 'imput-card' }, React.createElement('div', { className: 'imput-card-head' }, React.createElement('div', null, React.createElement('h2', null, 'Listado de imputaciones'), React.createElement('p', null, `${filteredRows.length} registro${filteredRows.length === 1 ? '' : 's'} filtrado${filteredRows.length === 1 ? '' : 's'}`))), React.createElement(AdvancedTimeEntriesTable, { rows: filteredRows, onEdit: onEdit, onDelete: onDelete, emptyText: rowsAll.length ? 'No hay imputaciones que coincidan con los filtros seleccionados.' : 'No hay imputaciones registradas todavía.' })));
};

const ProjectTimeEntriesPanelV2 = ({ project, onAdd, onEdit, onDelete }) => {
    const rows = flattenTimeEntries([project]).slice(0, 8);
    const allRows = flattenTimeEntries([project]);
    const totals = allRows.reduce((acc, row) => {
        acc.hours += toNumberOrZero(row.hours);
        acc.km += toNumberOrZero(row.mileageKm);
        if ((row.allowanceType && row.allowanceType !== 'Ninguna') || toNumberOrZero(row.allowanceAmount) > 0) acc.allowanceCount += 1;
        acc.allowance += toNumberOrZero(row.allowanceAmount);
        return acc;
    }, { hours: 0, km: 0, allowance: 0, allowanceCount: 0 });
    return React.createElement('section', { className: 'imput-card project-imput-card no-print' },
        React.createElement('div', { className: 'imput-card-head' }, React.createElement('div', null, React.createElement('h2', null, 'Imputaciones'), React.createElement('p', null, 'Últimas horas, dietas y kilometraje del proyecto.')), React.createElement('button', { type: 'button', className: 'btn-apple-primary', onClick: () => onAdd(project.id) }, React.createElement('i', { className: 'fas fa-plus' }), ' Añadir imputación')),
        React.createElement('div', { className: 'imput-project-totals imput-project-totals--cards' }, React.createElement('span', null, React.createElement('strong', null, totals.hours.toLocaleString('es-ES')), ' horas'), React.createElement('span', null, React.createElement('strong', null, totals.km.toLocaleString('es-ES')), ' km'), React.createElement('span', null, React.createElement('strong', null, totals.allowanceCount.toLocaleString('es-ES')), ' dietas'), React.createElement('span', null, React.createElement('strong', null, `${totals.allowance.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`), ' importe dietas')),
        React.createElement(AdvancedTimeEntriesTable, { rows: rows, compact: true, onEdit: onEdit, onDelete: onDelete, emptyText: 'No hay imputaciones registradas todavía en este proyecto.' }));
};

const ProfileView = () => {
    const userLabel = getUserLabel();
    const claims = (() => {
        try {
            const s = JSON.parse(localStorage.getItem('unitecnic_auth_session') || 'null');
            return (s && s.claims) ? s.claims : {};
        } catch (e) { return {}; }
    })();
    const email = claims.email || '';
    const username = claims['cognito:username'] || claims.preferred_username || claims.username || claims.sub || '';
    return React.createElement('div', { className: 'sb-page' },
        React.createElement('div', { className: 'sb-page-header' },
            React.createElement('h1', { className: 'sb-page-title' }, 'Perfil'),
            React.createElement('p', { className: 'sb-page-sub' }, 'Información de tu cuenta')
        ),
        React.createElement('div', { className: 'profile-card' },
            React.createElement('div', { className: 'profile-avatar-xl' }, (userLabel || 'U').charAt(0).toUpperCase()),
            React.createElement('div', { className: 'profile-details' },
                React.createElement('div', { className: 'profile-name' }, userLabel),
                email && React.createElement('div', { className: 'profile-email' },
                    React.createElement('i', { className: 'fas fa-envelope' }), ' ', email),
                username && username !== email && React.createElement('div', { className: 'profile-username' },
                    React.createElement('i', { className: 'fas fa-at' }), ' ', username)
            ),
            React.createElement('div', { className: 'profile-meta' },
                React.createElement('div', { className: 'profile-meta-row' },
                    React.createElement('span', { className: 'profile-meta-label' }, 'Rol'),
                    React.createElement('span', { className: 'profile-meta-value' }, 'Administrador')),
                React.createElement('div', { className: 'profile-meta-row' },
                    React.createElement('span', { className: 'profile-meta-label' }, 'Empresa'),
                    React.createElement('span', { className: 'profile-meta-value' }, 'Unitecnic'))
            )
        )
    );
};

// ─── VISTA: AJUSTES ───────────────────────────────────────────────────────────
const SettingsView = ({ theme, onToggleTheme }) =>
    React.createElement('div', { className: 'sb-page' },
        React.createElement('div', { className: 'sb-page-header' },
            React.createElement('h1', { className: 'sb-page-title' }, 'Ajustes'),
            React.createElement('p', { className: 'sb-page-sub' }, 'Preferencias de la aplicación')
        ),
        React.createElement('div', { className: 'settings-group' },
            React.createElement('h2', { className: 'settings-group-title' }, 'Apariencia'),
            React.createElement('div', { className: 'settings-row' },
                React.createElement('div', { className: 'settings-row-info' },
                    React.createElement('div', { className: 'settings-row-label' }, 'Tema de la interfaz'),
                    React.createElement('div', { className: 'settings-row-sub' },
                        theme === 'dark' ? 'Modo oscuro activo' : 'Modo claro activo')),
                React.createElement('button', {
                    className: `theme-fab ${theme === 'dark' ? 'night' : 'day'} settings-theme-inline`,
                    onClick: onToggleTheme,
                    title: theme === 'dark' ? 'Cambiar a modo día' : 'Cambiar a modo noche',
                    'aria-label': theme === 'dark' ? 'Cambiar a modo día' : 'Cambiar a modo noche'
                }, React.createElement('i', { className: `fas ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}` }))
            )
        ),
        React.createElement('div', { className: 'settings-group' },
            React.createElement('h2', { className: 'settings-group-title' }, 'Próximas funcionalidades'),
            React.createElement('div', { className: 'sb-placeholder sb-placeholder--compact' },
                React.createElement('p', { className: 'sb-placeholder-text' },
                    'Notificaciones, idioma, formato de fechas e integración con calendario estarán disponibles próximamente.'),
                React.createElement('span', { className: 'sb-placeholder-badge' }, 'En desarrollo')
            )
        )
    );

// ─── SIDEBAR ──────────────────────────────────────────────────────────────────
const Sidebar = ({ view, projects, statusFilter, onNavigate, sidebarOpen, onClose, theme, onToggleTheme, onImport }) => {
    const [proyectosOpen, setProyectosOpen] = useState(true);
    const counts = React.useMemo(() => ({
        total:     projects.length,
        active:    projects.filter(p => normalizeProjectEstado(p && p.meta && p.meta.estado) === 'En Ejecución').length,
        review:    projects.filter(p => normalizeProjectEstado(p && p.meta && p.meta.estado) === 'En Revisión').length,
        completed: projects.filter(p => normalizeProjectEstado(p && p.meta && p.meta.estado) === 'Completado').length,
        paused:    projects.filter(p => normalizeProjectEstado(p && p.meta && p.meta.estado) === 'En Pausa').length,
    }), [projects]);
    const userLabel = getUserLabel();

    const isActive = (v, sf) => {
        if (sf !== undefined) return view === 'list' && statusFilter === sf;
        if (Array.isArray(v)) return v.indexOf(view) !== -1;
        return view === v;
    };

    const ni = (icon, label, onClick, badge, active, indent) =>
        React.createElement('button', {
            key: label,
            className: 'sidebar-nav-item' + (active ? ' active' : '') + (indent ? ' indent' : ''),
            onClick: onClick
        },
            React.createElement('i', { className: 'fas ' + icon + ' snav-icon', 'aria-hidden': 'true' }),
            React.createElement('span', { className: 'snav-label' }, label),
            (badge != null && badge > 0) ? React.createElement('span', { className: 'snav-badge' }, badge) : null
        );

    return React.createElement('aside', {
        className: 'sidebar' + (sidebarOpen ? ' sidebar--open' : ''),
        'aria-label': 'Navegación principal'
    },
        // CABECERA
        React.createElement('div', { className: 'sidebar-head' },
            React.createElement('button', {
                className: 'sidebar-brand',
                onClick: () => { onNavigate('home', null); onClose(); },
                title: 'Ir al inicio'
            },
                React.createElement('img', { src: UNITECNIC_LOGO_BASE64, alt: 'Unitecnic', className: 'sidebar-brand-img' }),
                React.createElement('div', { className: 'sidebar-brand-text' },
                    React.createElement('span', { className: 'sidebar-brand-name' }, 'Unitecnic'),
                    React.createElement('span', { className: 'sidebar-brand-sub' }, 'Project Manager')
                )
            ),
            React.createElement('button', {
                className: 'sidebar-close-btn',
                onClick: onClose,
                'aria-label': 'Cerrar menú'
            }, React.createElement('i', { className: 'fas fa-xmark' }))
        ),
        // NAVEGACIÓN
        React.createElement('nav', { className: 'sidebar-nav', 'aria-label': 'Menú' },
            React.createElement('div', { className: 'sidebar-section-label' }, 'Principal'),
            ni('fa-house', 'Home', () => { onNavigate('home', null); onClose(); }, null,
                isActive('home'), false),

            // Grupo Proyectos
            React.createElement('div', { className: 'sidebar-section-label' }, 'Proyectos'),
            React.createElement('div', { className: 'sidebar-group' },
                React.createElement('button', {
                    className: 'sidebar-group-btn' + (isActive(['list', 'editor', 'wiki']) ? ' active' : ''),
                    onClick: () => setProyectosOpen(function(o) { return !o; }),
                    'aria-expanded': proyectosOpen
                },
                    React.createElement('i', { className: 'fas fa-folder-open snav-icon', 'aria-hidden': 'true' }),
                    React.createElement('span', { className: 'snav-label' }, 'Proyectos'),
                    React.createElement('i', { className: 'fas fa-chevron-down sidebar-chevron' + (proyectosOpen ? ' open' : ''), 'aria-hidden': 'true' })
                ),
                proyectosOpen && React.createElement('div', { className: 'sidebar-submenu' },
                    ni('fa-layer-group', 'Todos',
                        () => { onNavigate('list', null); onClose(); },
                        counts.total, isActive('list', null), true),
                    ni('fa-circle-play', 'En Ejecución',
                        () => { onNavigate('list', 'En Ejecución'); onClose(); },
                        counts.active, isActive('list', 'En Ejecución'), true),
                    ni('fa-magnifying-glass', 'En Revisión',
                        () => { onNavigate('list', 'En Revisión'); onClose(); },
                        counts.review, isActive('list', 'En Revisión'), true),
                    ni('fa-circle-check', 'Completados',
                        () => { onNavigate('list', 'Completado'); onClose(); },
                        counts.completed, isActive('list', 'Completado'), true),
                    ni('fa-circle-pause', 'En Pausa',
                        () => { onNavigate('list', 'En Pausa'); onClose(); },
                        counts.paused, isActive('list', 'En Pausa'), true)
                )
            ),

            React.createElement('div', { className: 'sidebar-section-label' }, 'Análisis'),
            ni('fa-chart-bar', 'Gráficos',
                () => { onNavigate('charts', null); onClose(); },
                null, isActive('charts'), false),
            ni('fa-shield-halved', 'Incidencias',
                () => { onNavigate('alerts', null); onClose(); },
                null, isActive('alerts'), false),
            ni('fa-users', 'Carga de trabajo',
                () => { onNavigate('workload', null); onClose(); },
                null, isActive('workload'), false),
            ni('fa-business-time', 'Imputaciones',
                () => { onNavigate('imputations', null); onClose(); },
                null, isActive('imputations'), false),

            React.createElement('div', { className: 'sidebar-section-label' }, 'Conocimiento'),
            ni('fa-book-open', 'Wiki de proyectos',
                () => { onNavigate('wikiProjects', null); onClose(); },
                null, isActive('wikiProjects'), false),

            React.createElement('div', { className: 'sidebar-divider' }),

            React.createElement('div', { className: 'sidebar-section-label' }, 'Administración'),
            ni('fa-user-group', 'Usuarios',
                () => { onNavigate('users', null); onClose(); },
                null, isActive('users'), false),
            ni('fa-file-arrow-up', 'Importar',
                () => { onNavigate('import', null); onClose(); },
                null, isActive('import'), false),
            ni('fa-gear', 'Ajustes',
                () => { onNavigate('settings', null); onClose(); },
                null, isActive('settings'), false)
        ),
        // PIE
        React.createElement('div', { className: 'sidebar-foot' },
            React.createElement('div', { className: 'sidebar-user-row' },
                React.createElement('div', { className: 'sidebar-avatar' },
                    (userLabel || 'U').charAt(0).toUpperCase()),
                React.createElement('div', { className: 'sidebar-user-info' },
                    React.createElement('div', { className: 'sidebar-user-name', title: userLabel }, userLabel),
                    React.createElement('div', { className: 'sidebar-user-role' }, 'Administrador')
                )
            ),
            React.createElement('div', { className: 'sidebar-foot-actions' },
                React.createElement('button', {
                    className: 'sfab' + (isActive('profile') ? ' active' : ''),
                    onClick: () => { onNavigate('profile', null); onClose(); },
                    title: 'Perfil'
                }, React.createElement('i', { className: 'fas fa-circle-user' })),
                React.createElement('button', {
                    className: 'sfab',
                    onClick: onToggleTheme,
                    title: theme === 'dark' ? 'Modo día' : 'Modo noche'
                }, React.createElement('i', { className: 'fas ' + (theme === 'dark' ? 'fa-sun' : 'fa-moon') })),
                React.createElement('button', {
                    className: 'sfab sfab--danger',
                    onClick: function() {
                        try {
                            if (typeof window.unitecnicLogout === 'function') { window.unitecnicLogout(); return; }
                            if (typeof window.gpLogout === 'function') { window.gpLogout(); return; }
                            if (typeof window.logout === 'function') { window.logout(); return; }
                            if (typeof window.signOut === 'function') { window.signOut(); return; }
                        } catch(e) {}
                    },
                    title: 'Cerrar sesión'
                }, React.createElement('i', { className: 'fas fa-right-from-bracket' }))
            )
        )
    );
};



const MainApp = () => {
    const [theme, setTheme] = React.useState(() => {
        const saved = localStorage.getItem('gp_theme');
        if (saved) return saved;
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });
    const AWS_API_URL = 'https://2qucj5d6k3qspjcc76f4n45zoa0rphnp.lambda-url.eu-west-1.on.aws/';

    React.useEffect(() => {
        document.documentElement.classList.toggle('theme-dark', theme === 'dark');
        localStorage.setItem('gp_theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));
    const [view, setView] = useState('loading');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [statusFilter, setStatusFilter] = useState(null);
    const [projects, setProjects] = useState([]);
    const projectsRef = React.useRef([]);
    useEffect(() => { projectsRef.current = projects || []; }, [projects]);
    const [currentProject, setCurrentProject] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    const [backupToast, setBackupToast] = useState(false);
    const [projectToast, setProjectToast] = useState(false);
    const [importToast, setImportToast] = useState(false);
    const [importCandidate, setImportCandidate] = useState(null);
    const [importConfirmOpen, setImportConfirmOpen] = useState(false);
    const importFileInputRef = React.useRef(null);
    const [csvToast, setCsvToast] = React.useState(false);
    const [storageWarning, setStorageWarning] = React.useState(false);
    const [storagePercent, setStoragePercent] = React.useState(0);
    const [timeEntryModal, setTimeEntryModal] = React.useState(null);

    // --- LOGICA DE SINCRONIZACIÓN Y AUTH ---
    const PENDING_KEY = 'unitecnic_projects_pending';
    const PENDING_TS_KEY = 'unitecnic_projects_pending_ts';

    // Función para obtener el token de seguridad de auth.js
    const getAuthHeader = () => {
        try {
            const s = JSON.parse(localStorage.getItem('unitecnic_auth_session'));
            if (s && s.access_token) return { 'Authorization': 'Bearer ' + s.access_token };
        } catch(e) { }
        return {};
    };

    const flushPendingToAWS = async () => {
        try {
            const pendingStr = localStorage.getItem(PENDING_KEY);
            if (!pendingStr) return false;
            const pendingList = JSON.parse(pendingStr);
            if (!Array.isArray(pendingList)) {
                localStorage.removeItem(PENDING_KEY);
                return false;
            }
            const res = await fetch(AWS_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
                body: JSON.stringify(pendingList)
            });
            if (res.ok) {
                localStorage.removeItem(PENDING_KEY);
                localStorage.removeItem(PENDING_TS_KEY);
                if (window.gpSetSyncStatus) window.gpSetSyncStatus('ok');
                return true;
            }
            throw new Error("Fallo flush");
        } catch (err) {
            console.error('Error sincronizando pendientes', err);
            return false;
        }
    };

    const loadProjectsLocal = async () => {
        try {
            // Añadimos ?t= para evitar datos viejos de caché
            const res = await fetch(AWS_API_URL + '?t=' + Date.now(), {
                method: 'GET',
                headers: getAuthHeader()
            });
            if (!res.ok) throw new Error(`Error AWS: ${res.status}`);
            const data = await res.json();
            const list = Array.isArray(data) ? data : (data.projects || data.Items || []);
            localStorage.setItem('unitecnic_projects', JSON.stringify(list));
            return list;
        } catch (err) {
            console.error('Error cargando desde AWS, usando local:', err);
            const saved = localStorage.getItem('unitecnic_projects');
            return saved ? JSON.parse(saved) : [];
        }
    };

    const saveProjectsLocal = async (newProjectsList) => {
        const list = Array.isArray(newProjectsList) ? newProjectsList : [];
        setProjects(list);
        localStorage.setItem('unitecnic_projects', JSON.stringify(list));

        try {
            if (window.gpSetSyncStatus) window.gpSetSyncStatus('pending');
            const res = await fetch(AWS_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
                body: JSON.stringify(list)
            });
            if (res.ok) {
                localStorage.removeItem(PENDING_KEY);
                if (window.gpSetSyncStatus) window.gpSetSyncStatus('ok');
            } else {
                throw new Error("Error en envío");
            }
        } catch (err) {
            localStorage.setItem(PENDING_KEY, JSON.stringify(list));
            if (window.gpSetSyncStatus) window.gpSetSyncStatus('pending');
        }
    };

    // --- RUTAS Y NAVEGACIÓN ---
    const setRoute = (hash) => { try { if (window.location.hash !== hash) window.location.hash = hash; } catch (e) { } };

const makeDraftProject = () => ({
        id: 'draft_' + Date.now(),
        __isDraft: true,
        meta: {
            titulo: "Nuevo Proyecto",
            subtitulo: "Informe de Inicio",
            cliente: "Sin cliente",
            clientLogoData: "",
            clientLogoUrl: "",
            empresa: "UNITECNIC",
            estado: "En Ejecución",
            responsableProyecto: "",
            pep: "",
            sharepointUrl: "" // <--- Nuevo campo
        },
        wiki: { content: "", tags: [], updatedAt: "" },
        tasks: []
    });

    const applyRouteFromHash = (list) => {
        try {
            const raw = String(window.location.hash || '').replace(/^#\/?/, '');
            const parts = raw.split('/').filter(Boolean);

            if (parts[0] === 'alerts') {
                setCurrentProject(null);
                setView('alerts');
                return;
            }

            if (parts[0] === 'workload') {
                setCurrentProject(null);
                setView('workload');
                return;
            }
            if (parts[0] === 'imputations') {
                setCurrentProject(null);
                setView('imputations');
                return;
            }
            if (parts[0] === 'charts') {
                setCurrentProject(null);
                setView('charts');
                return;
            }
            if (parts[0] === 'wiki-projects' || parts[0] === 'project-wiki' || parts[0] === 'wiki-global' || parts[0] === 'wikiProjects') {
                setCurrentProject(null);
                setView('wikiProjects');
                return;
            }
            if (parts[0] === 'users') {
                setCurrentProject(null);
                setView('users');
                return;
            }
            if (parts[0] === 'import') {
                setCurrentProject(null);
                setView('import');
                return;
            }
            if (parts[0] === 'profile') {
                setCurrentProject(null);
                setView('profile');
                return;
            }
            if (parts[0] === 'settings') {
                setCurrentProject(null);
                setView('settings');
                return;
            }
            if (parts[0] === 'proj' && parts[1]) {
                setCurrentProject(null);
                setView('list');
                setStatusFilter(decodeURIComponent(parts[1]));
                return;
            }
            if (!parts.length || parts[0] === 'home' || parts[0] === 'dashboard') {
                setCurrentProject(null);
                setStatusFilter(null);
                setView('home');
                return;
            }
            if (parts[0] === 'list') {
                setCurrentProject(null);
                setStatusFilter(null);
                setView('list');
                return;
            }
            if (parts[0] === 'new') {
                setCurrentProject(makeDraftProject());
                setView('editor');
                return;
            }
            if (parts[0] === 'project' && parts[1]) {
                const id = decodeURIComponent(parts[1]);
                const p = (list || []).find(x => String(x.id) === String(id));
                if (p) { setCurrentProject(p); setView('editor'); }
                else { setCurrentProject(null); setView('list'); }
                return;
            }
            if (parts[0] === 'wiki' && parts[1]) {
  const id = decodeURIComponent(parts[1]);
  const p = (list || []).find(x => String(x.id) === String(id));
  if (p) { setCurrentProject(p); setView('wiki'); }
  else { setCurrentProject(null); setView('list'); }
  return;
}
            setView('list');
        } catch (e) { setView('list'); }
    };

    // EFECTO DE CARGA INICIAL Y AUTO-REFRESCO
    useEffect(() => {
        const sync = async () => {
            const list = await loadProjectsLocal();
            // Si hay algo pendiente localmente y no hay internet, lo usamos, si no, lo de la nube
            const pendingStr = localStorage.getItem(PENDING_KEY);
            const effectiveList = (pendingStr && !navigator.onLine) ? JSON.parse(pendingStr) : list;

            // --- Paso 6.3: asegurar wiki en proyectos antiguos ---
const normalized = (effectiveList || []).map(p => {
  if (!p) return p;
  return { ...p, wiki: getProjectWikiData(p) };
});


            setProjects(normalized);
            try {
                let total = 0;
                for (let k in localStorage) {
                    if (Object.prototype.hasOwnProperty.call(localStorage, k)) total += (k.length + (localStorage[k] || '').length) * 2;
                }
                const pct = Math.min(100, Math.round((total / (5 * 1024 * 1024)) * 100));
                setStoragePercent(pct);
                if (pct >= 80) setStorageWarning(true);
            } catch(e) {}
            if (!window.location.hash) setRoute('#/home');
            applyRouteFromHash(normalized);

            if (navigator.onLine) await flushPendingToAWS();
        };

        sync(); // Carga al entrar

        // Refrescar cada 30 segundos si estamos en la lista
        const timer = setInterval(() => {
            if (view === 'list' && navigator.onLine) sync();
        }, 30000);

        return () => clearInterval(timer);
    }, [view]);

    useEffect(() => {
        const handler = () => applyRouteFromHash(projectsRef.current || []);
        window.addEventListener('hashchange', handler);
        return () => window.removeEventListener('hashchange', handler);
    }, []);

    useEffect(() => {
        const onOnline = () => { flushPendingToAWS(); };
        window.addEventListener('online', onOnline);
        return () => window.removeEventListener('online', onOnline);
    }, []);

// --- LÓGICA DE BACKUP ---
    const exportBackupJSON = () => {
        try {
            const projectsToExport = projectsRef.current || [];
            const logosToExport = JSON.parse(localStorage.getItem('clientLogoMap') || '{}');

            const backupData = {
                meta: {
                    exportedAt: new Date().toISOString(),
                    app: "Unitecnic Project Manager",
                    version: "2.0"
                },
                projects: projectsToExport,
                clientLogoMap: logosToExport
            };

            const dataStr = JSON.stringify(backupData, null, 2);
            const blob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = `backup_proyectos_${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setBackupToast(true);
            setTimeout(() => setBackupToast(false), 3000);
        } catch (err) {
            console.error("Error al generar el backup:", err);
            alert("No se pudo generar el archivo de copia de seguridad.");
        }
    };

    // --- LÓGICA DE EXPORTACIÓN CSV ---
    const exportCSV = () => {
        try {
            const projectsToExport = projectsRef.current || [];
            const headers = ['Proyecto', 'Cliente', 'Estado', 'Responsable', 'Ejecutor', 'PEP', 'Total Tareas', 'Completadas', 'En Curso', 'Pendientes', 'Progreso %'];
            const escape = (v) => `"${String(v || '').replace(/"/g, '""')}"`;
            const rows = projectsToExport.map(p => {
                const m = p.meta || {};
                const stats = computeProjectStats(p.tasks || []);
                return [m.titulo, m.cliente, normalizeProjectEstado(m.estado), m.responsableProyecto, m.ejecutorProyecto, m.pep, stats.total, stats.completed, stats.inProgress, stats.pending, stats.progress].map(escape).join(',');
            });
            const bom = '﻿';
            const csv = bom + [headers.map(escape).join(','), ...rows].join('\r\n');
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `proyectos_${new Date().toISOString().split('T')[0]}.csv`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            setCsvToast(true);
            setTimeout(() => setCsvToast(false), 3000);
        } catch (err) {
            console.error("Error al generar CSV:", err);
            alert("No se pudo generar el archivo CSV.");
        }
    };

    // --- LÓGICA DE IMPORTACIÓN ---
    const openImportPicker = () => { if (importFileInputRef.current) importFileInputRef.current.click(); };

    const normalizeImportPayload = (data) => {
        if (!data || typeof data !== 'object') return null;
        if (!Array.isArray(data.projects)) return null;
        return {
            projects: data.projects,
            clientLogoMap: data.clientLogoMap || {},
            meta: data.meta || {}
        };
    };

    const handleImportFileSelected = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const json = JSON.parse(event.target.result);
                const validated = normalizeImportPayload(json);
                if (validated) {
                    setImportCandidate(validated);
                    setImportConfirmOpen(true);
                } else {
                    alert("El archivo no parece ser un backup válido.");
                }
            } catch (err) {
                alert("Error al leer el archivo JSON.");
            }
            e.target.value = '';
        };
        reader.readAsText(file);
    };

    const confirmImport = async () => {
        if (!importCandidate) return;
        try {
            if (importCandidate.clientLogoMap) {
                localStorage.setItem('clientLogoMap', JSON.stringify(importCandidate.clientLogoMap));
            }
            await saveProjectsLocal(importCandidate.projects);
            setImportConfirmOpen(false);
            setImportCandidate(null);
            setImportToast(true);
            setTimeout(() => setImportToast(false), 3000);
        } catch (err) {
            alert("Error al importar los datos.");
        }
    };

    // --- NAVEGACIÓN DESDE SIDEBAR ---
    const handleSidebarNavigate = (targetView, targetFilter) => {
        setStatusFilter(targetFilter || null);
        if (targetView === 'home') {
            setCurrentProject(null);
            setView('home');
            setRoute('#/home');
        } else if (targetView === 'list') {
            setCurrentProject(null);
            setView('list');
            const hash = targetFilter ? '#/proj/' + encodeURIComponent(targetFilter) : '#/list';
            setRoute(hash);
        } else if (targetView === 'wikiProjects') {
            setCurrentProject(null);
            setView('wikiProjects');
            setRoute('#/wiki-projects');
        } else {
            setCurrentProject(null);
            setView(targetView);
            setRoute('#/' + targetView);
        }
    };

    const createProject = async () => {
        const draftProject = makeDraftProject();
        setCurrentProject(draftProject);
        setView('editor');
        setRoute('#/new');
    };
    const selectProject = (p) => {
        setCurrentProject(p);
        setView('editor');
        setRoute(`#/project/${encodeURIComponent(String(p.id || ''))}`);
    };
    const saveProject = async (updatedData) => {
        setIsSaving(true);
        try {
            const clean = { ...updatedData };
            if (clean.__isDraft)
                delete clean.__isDraft;
            const isNew = String((updatedData === null || updatedData === void 0 ? void 0 : updatedData.id) || '').startsWith('draft_') || !projects.some(p => p.id === updatedData.id);
            if (isNew) {
                const created = { ...clean, id: 'local_' + Date.now() };
                const updatedList = [...projects, created];
                await saveProjectsLocal(updatedList);
                // Volvemos al dashboard al crear (flujo "Nuevo → Editar → Guardar → Dashboard")
                setCurrentProject(null);
                setView('list');
                setRoute('#/list');
                setProjectToast(true);
                setTimeout(() => setProjectToast(false), 2600);
                await new Promise(r => setTimeout(r, 450)); // UX
                return { created: true, project: created };
            }
            else {
                const updatedList = projects.map(p => p.id === clean.id ? clean : p);
                await saveProjectsLocal(updatedList);
                setCurrentProject(clean);
                setRoute(`#/project/${encodeURIComponent(String(clean.id || ''))}`);
                await new Promise(r => setTimeout(r, 450)); // UX
                return { created: false, project: clean };
            }
        }
        catch (e) {
            console.error(e);
            alert('Error al guardar');
            return { created: false, project: null, error: true };
        }
        finally {
            setIsSaving(false);
        }
    };
    const saveProjectWiki = async (updatedData) => {
        setIsSaving(true);
        try {
            const clean = { ...updatedData, wiki: getProjectWikiData(updatedData) };
            const updatedList = projects.map(p => p.id === clean.id ? clean : p);
            await saveProjectsLocal(updatedList);
            setCurrentProject(clean);
            await new Promise(r => setTimeout(r, 300));
            return { created: false, project: clean };
        } catch (e) {
            console.error(e);
            alert('Error al guardar la wiki');
            return { created: false, project: null, error: true };
        } finally {
            setIsSaving(false);
        }
    };
    const deleteProject = async (id) => {
        if (!confirm("¿Eliminar proyecto permanentemente?"))
            return;
        const updatedList = projects.filter(p => p.id !== id);
        await saveProjectsLocal(updatedList);
    };
    const moveProject = async (projectId, targetEstado, beforeProjectId) => {
        const target = normalizeProjectEstado(targetEstado);
        const draggedId = String(projectId);
        const beforeId = beforeProjectId ? String(beforeProjectId) : null;

        const currentList = [...projects];
        const fromIdx = currentList.findIndex(p => String(p.id) === draggedId);
        if (fromIdx < 0) return;

        const prevEstado = normalizeProjectEstado((currentList[fromIdx].meta || {}).estado);

        let moving = {
            ...currentList[fromIdx],
            meta: { ...(currentList[fromIdx].meta || {}), estado: target }
        };

        if (prevEstado !== target) {
            moving = addActivityToProject(
                moving,
                `Estado del proyecto: ${prevEstado || '-'} → ${target || '-'}`,
                'project'
            );
        }

        currentList.splice(fromIdx, 1);

        let insertIdx = currentList.length;
        if (beforeId) {
            const bi = currentList.findIndex(p => String(p.id) === beforeId);
            if (bi >= 0) insertIdx = bi;
        } else {
            const sameStateIdx = currentList
                .map((p, i) => ({ i, estado: normalizeProjectEstado((p.meta || {}).estado) }))
                .filter(x => x.estado === target)
                .map(x => x.i);
            if (sameStateIdx.length) insertIdx = Math.max(...sameStateIdx) + 1;
        }

        currentList.splice(insertIdx, 0, moving);
        await saveProjectsLocal(currentList);
    };
    const openTimeEntryModal = (projectId, entry, initialDate) => {
        setTimeEntryModal({ projectId: projectId || null, entry: entry || null, initialDate: initialDate || null });
    };
    const saveTimeEntry = async ({ projectId, previousProjectId, entryId, values }) => {
        const nowIso = new Date().toISOString();
        const id = entryId || ('te_' + Date.now());
        let existingCreatedAt = null;
        projects.forEach(p => {
            getProjectTimeEntries(p).forEach(e => {
                if (String(e.id) === String(id)) existingCreatedAt = e.createdAt || null;
            });
        });
        const entry = {
            id,
            date: values.date || getCurrentDateInput(),
            user: values.user || '',
            hours: toNumberOrZero(values.hours),
            allowanceType: values.allowanceType || 'Ninguna',
            allowanceAmount: toNumberOrZero(values.allowanceAmount),
            mileageKm: toNumberOrZero(values.mileageKm),
            notes: values.notes || '',
            createdAt: existingCreatedAt || nowIso,
            updatedAt: nowIso
        };
        const targetId = String(projectId || previousProjectId || '');
        if (!targetId) return;
        const updatedList = projects.map(p => {
            const currentEntries = getProjectTimeEntries(p).filter(e => String(e.id) !== String(id));
            if (String(p.id) !== targetId) return { ...p, timeEntries: currentEntries };
            const nextProject = { ...p, timeEntries: [...currentEntries, entry] };
            return addActivityToProject(
                nextProject,
                `${entryId ? 'Imputación actualizada' : 'Imputación añadida'}: ${entry.hours.toLocaleString('es-ES')} h${entry.mileageKm ? ` · ${entry.mileageKm.toLocaleString('es-ES')} km` : ''}`,
                'time'
            );
        });
        await saveProjectsLocal(updatedList);
        const updatedCurrent = updatedList.find(p => currentProject && String(p.id) === String(currentProject.id));
        if (updatedCurrent) setCurrentProject(updatedCurrent);
        setTimeEntryModal(null);
    };
    const deleteTimeEntry = async (projectId, entryId) => {
        if (!confirm('¿Eliminar esta imputación?')) return;
        const updatedList = projects.map(p => {
            if (String(p.id) !== String(projectId)) return p;
            return { ...p, timeEntries: getProjectTimeEntries(p).filter(e => String(e.id) !== String(entryId)) };
        });
        await saveProjectsLocal(updatedList);
        const updatedCurrent = updatedList.find(p => currentProject && String(p.id) === String(currentProject.id));
        if (updatedCurrent) setCurrentProject(updatedCurrent);
    };
    if (view === 'loading')
        return React.createElement("div", { className: "h-screen flex items-center justify-center bg-gray-50" },
            React.createElement("div", { className: "loader" }));
    return (React.createElement("div", { className: "app-layout" },
        // Overlay fondo (mobile)
        React.createElement("div", {
            className: "sidebar-overlay" + (sidebarOpen ? " sidebar-overlay--on" : ""),
            onClick: function() { setSidebarOpen(false); },
            "aria-hidden": "true"
        }),
        // Sidebar principal
        React.createElement(Sidebar, {
            view: view,
            projects: projects,
            statusFilter: statusFilter,
            onNavigate: handleSidebarNavigate,
            sidebarOpen: sidebarOpen,
            onClose: function() { setSidebarOpen(false); },
            theme: theme,
            onToggleTheme: toggleTheme,
            onImport: openImportPicker
        }),
        // Contenido principal
        React.createElement("main", { className: "sidebar-main" },
            // Botón hamburguesa (solo mobile)
            React.createElement("button", {
                className: "sidebar-hamburger no-print",
                onClick: function() { setSidebarOpen(true); },
                "aria-label": "Abrir menú",
                "aria-expanded": sidebarOpen
            }, React.createElement("i", { className: "fas fa-bars" })),

            React.createElement("input", { ref: importFileInputRef, type: "file", accept: "application/json,.json", className: "hidden", onChange: handleImportFileSelected }),
            view === 'home' && (React.createElement(HomeView, { projects: projects, onCreate: createProject, onNavigate: handleSidebarNavigate })),
            view === 'workload' && (React.createElement(WorkloadDashboardView, { projects: projects, onBack: () => { setView('list'); setRoute('#/list'); } })),
            view === 'imputations' && (React.createElement(AdvancedImputationsView, { projects: projects, onBack: () => { setView('home'); setRoute('#/home'); }, onCreate: openTimeEntryModal, onEdit: (entry) => openTimeEntryModal(entry.projectId, entry), onDelete: deleteTimeEntry })),
            view === 'alerts' && (React.createElement(AlertsView, { projects: projects, onBack: () => { setView('list'); setRoute('#/list'); } })),
            view === 'charts' && (React.createElement(ChartsView, { projects: projects, onBack: () => { setView('list'); setRoute('#/list'); } })),
            view === 'wikiProjects' && (React.createElement(ProjectWikiGlobalView, {
                projects: projects,
                onOpenProjects: () => { setCurrentProject(null); setView('list'); setRoute('#/list'); },
                onOpenWiki: (project) => { setCurrentProject(project); setView('wiki'); setRoute(`#/wiki/${encodeURIComponent(String(project.id || ''))}`); }
            })),
            view === 'users' && React.createElement(UsersView, null),
            view === 'import' && React.createElement(ImportView, { onImport: openImportPicker }),
            view === 'profile' && React.createElement(ProfileView, null),
            view === 'settings' && React.createElement(SettingsView, { theme: theme, onToggleTheme: toggleTheme }),
            view === 'list' && (React.createElement(ProjectList, { projects: projects, onCreate: createProject, onSelect: selectProject, onDelete: deleteProject, onMoveProject: moveProject, onBackup: exportBackupJSON, onExportCSV: exportCSV, onImport: openImportPicker, theme: theme, onToggleTheme: toggleTheme, storagePercent: storagePercent, statusFilter: statusFilter })),
            view === 'editor' && currentProject && (React.createElement(ProjectEditor, { project: currentProject, onSave: saveProject, onBack: () => { setCurrentProject(null); setView('list'); setRoute('#/list'); }, onCancelNew: () => { setCurrentProject(null); setView('list'); setRoute('#/list'); }, isSaving: isSaving, theme: theme, onToggleTheme: toggleTheme, onAddTimeEntry: openTimeEntryModal, onEditTimeEntry: (entry) => openTimeEntryModal(entry.projectId, entry), onDeleteTimeEntry: deleteTimeEntry })),
            view === 'wiki' && currentProject && (
  React.createElement(ProjectWiki, {
    project: currentProject,
    onSave: saveProjectWiki,
    onBack: () => { setView('editor'); setRoute(`#/project/${currentProject.id}`); },
    isSaving: isSaving
  })
),

        timeEntryModal && React.createElement(AdvancedTimeEntryModal, {
            projects: projects,
            entry: timeEntryModal.entry,
            lockedProjectId: timeEntryModal.projectId && !timeEntryModal.entry ? timeEntryModal.projectId : null,
            initialDate: timeEntryModal.initialDate,
            onClose: () => setTimeEntryModal(null),
            onSave: saveTimeEntry
        }),
        importConfirmOpen && importCandidate && (React.createElement("div", { className: "modal-overlay no-print", role: "dialog", "aria-modal": "true", "aria-label": "Confirmar importaci\u00F3n" },
            React.createElement("div", { className: "modal-card" },
                React.createElement("div", { className: "modal-title" }, "Importar backup"),
                React.createElement("div", { className: "modal-subtitle" }, "Esta acci\u00F3n sobrescribe los datos actuales para evitar duplicados."),
                React.createElement("div", { className: "modal-meta" },
                    React.createElement("div", null,
                        React.createElement("span", { className: "modal-meta-label" }, "Proyectos:"),
                        " ",
                        Array.isArray(importCandidate.projects) ? importCandidate.projects.length : 0),
                    React.createElement("div", null,
                        React.createElement("span", { className: "modal-meta-label" }, "Logos:"),
                        " ",
                        importCandidate.clientLogoMap ? Object.keys(importCandidate.clientLogoMap).length : 0),
                    importCandidate.meta && importCandidate.meta.exportedAt && (React.createElement("div", null,
                        React.createElement("span", { className: "modal-meta-label" }, "Backup:"),
                        " ",
                        new Date(importCandidate.meta.exportedAt).toLocaleString('es-ES')))),
                React.createElement("div", { className: "modal-actions" },
                    React.createElement("button", { type: "button", className: "btn-apple", onClick: () => { setImportConfirmOpen(false); setImportCandidate(null); } }, "Cancelar"),
                    React.createElement("button", { type: "button", className: "btn-apple-danger", onClick: confirmImport }, "Importar y sobrescribir"))))),
        importToast && (React.createElement("div", { className: "fixed top-[calc(env(safe-area-inset-top)+16px)] left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 z-[9999] pointer-events-none no-print" },
            React.createElement("div", { className: "h-10 w-10 rounded-full bg-white/10 flex items-center justify-center" },
                React.createElement("i", { className: "fas fa-file-arrow-up" })),
            React.createElement("div", { className: "min-w-[220px]" },
                React.createElement("div", { className: "font-semibold leading-tight" }, "Importaci\u00F3n completada"),
                React.createElement("div", { className: "text-xs text-white/70" }, "Datos restaurados (proyectos y logos).")))),
        projectToast && (React.createElement("div", { className: "fixed top-[calc(env(safe-area-inset-top)+18px)] left-1/2 -translate-x-1/2 bg-black/60 text-white px-5 py-3 rounded-2xl shadow-2xl backdrop-blur-md border border-white/10 flex items-center gap-3 z-[9999] pointer-events-none" },
            React.createElement("div", { className: "bg-green-500 rounded-full p-1" },
                React.createElement("i", { className: "fas fa-check text-white" })),
            React.createElement("div", null,
                React.createElement("div", { className: "font-semibold leading-tight" }, "Proyecto creado"),
                React.createElement("div", { className: "text-sm text-white/75 leading-tight" }, "Guardado y a\u00F1adido al Dashboard.")))),
        csvToast && (React.createElement("div", { className: "fixed top-[calc(env(safe-area-inset-top)+80px)] left-1/2 -translate-x-1/2 bg-gray-900/80 text-white px-5 py-3 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 flex items-center gap-3 z-[9999] pointer-events-none no-print" },
            React.createElement("div", { className: "h-10 w-10 rounded-full bg-white/10 flex items-center justify-center" },
                React.createElement("i", { className: "fas fa-file-csv" })),
            React.createElement("div", null,
                React.createElement("div", { className: "font-semibold leading-tight" }, "CSV generado"),
                React.createElement("div", { className: "text-xs text-white/70" }, "Archivo descargado. Ábrelo con Excel.")))),
        storageWarning && (React.createElement("div", { className: "fixed bottom-16 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-[9998] no-print cursor-pointer", onClick: () => setStorageWarning(false) },
            React.createElement("i", { className: "fas fa-triangle-exclamation text-lg" }),
            React.createElement("div", null,
                React.createElement("div", { className: "font-semibold leading-tight" }, "Almacenamiento casi lleno (", storagePercent, "%)"),
                React.createElement("div", { className: "text-xs text-white/90" }, "Haz un backup y borra proyectos completados. Pulsa para cerrar.")),
            React.createElement("i", { className: "fas fa-xmark ml-2 text-white/60" }))),
        backupToast && (React.createElement("div", { className: "fixed top-[calc(env(safe-area-inset-top)+16px)] left-1/2 -translate-x-1/2 bg-gray-900/80 text-white px-5 py-3 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 flex items-center gap-3 z-[9999] pointer-events-none no-print" },
            React.createElement("div", { className: "h-10 w-10 rounded-full bg-white/10 flex items-center justify-center" },
                React.createElement("i", { className: "fas fa-file-arrow-down" })),
            React.createElement("div", null,
                React.createElement("div", { className: "font-semibold leading-tight" }, "Backup generado"),
                React.createElement("div", { className: "text-xs text-white/70" }, "Archivo .json descargado con proyectos y logos.")))),
        React.createElement("button", { type: "button", onClick: toggleTheme, className: `theme-fab no-print sidebar-hide-fab ${theme === 'dark' ? 'night' : 'day'}`, title: theme === 'dark' ? 'Cambiar a modo día' : 'Cambiar a modo noche', "aria-label": theme === 'dark' ? 'Cambiar a modo día' : 'Cambiar a modo noche' }, theme === 'dark' ? (React.createElement("i", { className: "fas fa-moon" })) : (React.createElement("i", { className: "fas fa-sun" })))
        )  /* cierre main */
    )); /* cierre app-layout + return */
};
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        console.error('Error crítico en la aplicación:', error, info);
    }
    render() {
        if (this.state.hasError) {
            return React.createElement('div', { className: 'h-screen flex items-center justify-center bg-gray-50' },
                React.createElement('div', { style: { background: 'white', borderRadius: '1.25rem', padding: '2.5rem', maxWidth: '28rem', textAlign: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.1)', border: '1px solid #fecaca' } },
                    React.createElement('div', { style: { fontSize: '3rem', marginBottom: '1rem' } }, '⚠️'),
                    React.createElement('h2', { style: { fontWeight: 700, fontSize: '1.25rem', color: '#1f2937', marginBottom: '0.5rem' } }, 'Algo ha fallado'),
                    React.createElement('p', { style: { color: '#6b7280', marginBottom: '1.5rem', lineHeight: 1.5 } }, 'Ha ocurrido un error inesperado. Tus datos están seguros en el servidor.'),
                    React.createElement('button', {
                        onClick: () => this.setState({ hasError: false }),
                        style: { background: '#0888c8', color: 'white', border: 'none', borderRadius: '0.75rem', padding: '0.6rem 1.5rem', fontWeight: 600, cursor: 'pointer', fontSize: '0.95rem' }
                    }, 'Intentar de nuevo'),
                    React.createElement('br', null),
                    React.createElement('button', {
                        onClick: () => window.location.reload(),
                        style: { marginTop: '0.75rem', background: 'transparent', color: '#6b7280', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }
                    }, 'Recargar página')
                )
            );
        }
        return this.props.children;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(ErrorBoundary, null, React.createElement(MainApp, null)));
