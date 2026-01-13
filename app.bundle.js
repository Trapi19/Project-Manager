// @ts-nocheck
// --- 1. DEFINICIONES GLOBALES E IMPORTS ---
const React = window.React || { useState: () => {}, useEffect: () => {}, createElement: () => {}, useRef: () => {}, useMemo: () => {} };
const ReactDOM = window.ReactDOM || { createRoot: () => {} };

// Variable global para fecha (FALTABA EN TU CÓDIGO ORIGINAL)
window.formatFechaES = (fecha) => {
    if (!fecha) return "";
    const [y, m, d] = fecha.split('-');
    return `${d}/${m}/${y}`;
};

// Placeholder para logo (FALTABA EN TU CÓDIGO ORIGINAL)
const UNITECNIC_LOGO_BASE64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbElEQVR4nO3MwQ2AMAwEsO+/Qw/2BzBFonKkF58AgT9r3b1378B7D6x1z4G17jmw1j0H1rrnwFr3HFjrngNr3XNgrXsOrHXPgbXuObDWPQfWun/A+g88B9b6J8B6D6z1z4G1/gmw3gNr/RNgvQfqGwo57+w2BAAAAABJRU5ErkJggg==";

// --- 2. HELPERS Y CONSTANTES ---
const { useState, useEffect } = React;

const Icons = {
    check: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }), React.createElement("polyline", { points: "22 4 12 14.01 9 11.01" })),
    clock: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("circle", { cx: "12", cy: "12", r: "10" }), React.createElement("polyline", { points: "12 6 12 12 16 14" })),
    wifi: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("path", { d: "M5 12.55a11 11 0 0 1 14.08 0" }), React.createElement("path", { d: "M1.42 9a16 16 0 0 1 21.16 0" }), React.createElement("path", { d: "M8.53 16.11a6 6 0 0 1 6.95 0" }), React.createElement("line", { x1: "12", y1: "20", x2: "12.01", y2: "20" })),
    server: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("rect", { x: "2", y: "2", width: "20", height: "8", rx: "2", ry: "2" }), React.createElement("rect", { x: "2", y: "14", width: "20", height: "8", rx: "2", ry: "2" }), React.createElement("line", { x1: "6", y1: "6", x2: "6.01", y2: "6" }), React.createElement("line", { x1: "6", y1: "18", x2: "6.01", y2: "18" })),
    monitor: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", ry: "2" }), React.createElement("line", { x1: "8", y1: "21", x2: "16", y2: "21" }), React.createElement("line", { x1: "12", y1: "17", x2: "12", y2: "21" })),
    tv: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("rect", { x: "2", y: "7", width: "20", height: "15", rx: "2", ry: "2" }), React.createElement("polyline", { points: "17 2 12 7 7 2" })),
    users: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }), React.createElement("circle", { cx: "9", cy: "7", r: "4" }), React.createElement("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }), React.createElement("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })),
    key: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" })),
    alert: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("circle", { cx: "12", cy: "12", r: "10" }), React.createElement("line", { x1: "12", y1: "8", x2: "12", y2: "12" }), React.createElement("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })),
    lock: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }), React.createElement("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }))
};

const normalizeDataImage = (value) => {
    if (!value) return "";
    const v = String(value).trim();
    if (!v) return "";
    if (v.startsWith("data:image/")) return v;
    return "data:image/png;base64," + v.replace(/^base64,?/i, "");
};

const IconOptions = [
    { id: 'wifi', label: 'Wifi' }, { id: 'server', label: 'Server' },
    { id: 'monitor', label: 'Monitor' }, { id: 'tv', label: 'TV' },
    { id: 'users', label: 'Usuarios' }, { id: 'key', label: 'Llave' },
    { id: 'alert', label: 'Alerta' }, { id: 'lock', label: 'Candado' }
];

const normalizeEstado = (estado) => {
    const raw = (estado ?? '').toString().trim();
    if (!raw) return 'Pendiente';
    if (raw === 'Próximo' || raw === 'Proximo') return 'Pendiente';
    if (raw.toLowerCase() === 'en curso' || raw.toLowerCase() === 'en-curso') return 'En Curso';
    if (raw.toLowerCase() === 'completado') return 'Completado';
    if (raw.toLowerCase() === 'pendiente') return 'Pendiente';
    return raw;
};

const normalizeProjectEstado = (estado) => {
    const raw = (estado ?? 'En Ejecución').toString().trim();
    if (!raw) return 'En Ejecución';
    const low = raw.toLowerCase();
    if (low === 'en ejecucion' || low === 'en ejecución') return 'En Ejecución';
    if (low === 'completado') return 'Completado';
    if (low === 'en pausa') return 'En Pausa';
    if (low === 'en revision' || low === 'en revisión') return 'En Revisión';
    return raw;
};

const buildTaskIndex = (tasks) => {
    const idx = new Map();
    tasks.forEach(t => idx.set(t.id, t));
    return idx;
};

const isTaskBlocked = (task, taskIndex) => {
    const depId = task.dependsOn;
    if (!depId) return false;
    const dep = taskIndex.get(depId);
    if (!dep) return false;
    return normalizeEstado(dep.estado) !== 'Completado';
};

const effectiveEstado = (task, taskIndex) => {
    const blocked = isTaskBlocked(task, taskIndex);
    const estado = normalizeEstado(task.estado);
    if (blocked && estado !== 'Completado') return 'Pendiente';
    return estado;
};

const computeProjectStats = (tasks) => {
    const idx = buildTaskIndex(tasks);
    const total = tasks.length || 0;
    let completed = 0, inProgress = 0, pending = 0;
    tasks.forEach(t => {
        const e = effectiveEstado(t, idx);
        if (e === 'Completado') completed++;
        else if (e === 'En Curso') inProgress++;
        else pending++;
    });
    const progress = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { total, completed, inProgress, pending, progress };
};

const IconPicker = ({ value, onChange, open, onToggle }) => (
    React.createElement("div", { className: "relative", onClick: (e) => e.stopPropagation() },
        React.createElement("button", { type: "button", onClick: onToggle, className: "w-10 h-10 rounded-xl border border-[color:var(--border)] bg-white/80 hover:bg-white flex items-center justify-center text-[color:var(--brand-dark)] shadow-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]", title: "Cambiar icono" }, Icons[value] || Icons.monitor),
        open && (React.createElement("div", { className: "absolute z-50 mt-2 w-56 rounded-2xl border border-[color:var(--border)] bg-white shadow-2xl p-2" },
            React.createElement("div", { className: "grid grid-cols-4 gap-2" }, IconOptions.map(opt => (
                React.createElement("button", { key: opt.id, type: "button", onClick: () => onChange(opt.id), className: `h-11 rounded-xl border flex items-center justify-center transition-colors ${opt.id === value ? "border-[color:rgba(8,136,200,0.35)] bg-[color:rgba(8,136,200,0.10)] text-[color:var(--brand-dark)]" : "border-slate-100 hover:border-[color:rgba(8,136,200,0.25)] hover:bg-[color:rgba(8,136,200,0.06)] text-slate-700"}`, title: opt.label }, Icons[opt.id] || Icons.monitor)
            ))),
            React.createElement("div", { className: "mt-2 text-[11px] text-slate-500 px-1" }, "Selecciona un icono")
        ))
    )
);

// --- AUDITORÍA Y USER ---
const getUserLabel = () => {
    try {
        const s = JSON.parse(localStorage.getItem('unitecnic_auth_session') || 'null');
        const c = (s && s.claims) ? s.claims : {};
        return (c.email || c['cognito:username'] || c.preferred_username || c.username || c.sub || 'Usuario');
    } catch (e) { return 'Usuario'; }
};

const ensureAudit = (p) => {
    const audit = (p && p.audit && typeof p.audit === 'object') ? p.audit : {};
    const comments = Array.isArray(audit.comments) ? audit.comments : [];
    const activity = Array.isArray(audit.activity) ? audit.activity : [];
    return { audit, comments, activity };
};

const addActivityToProject = (project, message, type = 'project') => {
    const { audit, comments, activity } = ensureAudit(project);
    const entry = { id: 'e_' + Date.now() + '_' + Math.random().toString(16).slice(2), ts: Date.now(), user: getUserLabel(), type, message };
    const nextActivity = [...activity, entry].slice(-200);
    return { ...project, audit: { ...audit, comments, activity: nextActivity } };
};

// --- COMPONENTE: TARJETA DE PROYECTO ---
const ProjectCard = ({ p, onSelect, onDelete, dnd }) => {
    const { onDragStart, onDragEnd, onDragOver, onDrop, isDragging, isDragOver, blockClickRef } = dnd || {};
    const stats = computeProjectStats(p.tasks || []);
    const projectEstado = normalizeProjectEstado(p?.meta?.estado);
    const total = stats.total || 1;
    const w = (n) => `${Math.max(0, Math.round((n / total) * 100))}%`;

    return (
        React.createElement("div", { "data-estado": projectEstado, draggable: !!onDragStart, onDragStart: (e) => { e.stopPropagation(); onDragStart && onDragStart(e, p); }, onDragEnd: (e) => { e.stopPropagation(); onDragEnd && onDragEnd(e); }, onDragOver: (e) => { onDragOver && onDragOver(e, p); }, onDrop: (e) => { onDrop && onDrop(e, p); }, className: `project-card bg-white rounded-xl shadow-sm border border-gray-200 p-6 card-hover transition-all cursor-pointer group relative flex flex-col justify-between ${isDragging ? 'opacity-60' : ''} ${isDragOver ? 'ring-2 ring-[color:rgba(8,136,200,0.35)]' : ''}`, onClick: () => { if (blockClickRef && blockClickRef.current) return; onSelect(p); } },
            React.createElement("div", null,
                React.createElement("div", { className: "flex justify-between items-start" },
                    React.createElement("div", { className: `h-12 w-12 rounded-lg flex items-center justify-center shrink-0 ${projectEstado === 'Completado' ? 'bg-emerald-100 text-emerald-700' : projectEstado === 'En Pausa' ? 'bg-slate-100 text-slate-700' : projectEstado === 'En Revisión' ? 'bg-violet-100 text-violet-700' : 'bg-[color:rgba(8,136,200,0.12)] text-[color:var(--brand-dark)]'} overflow-hidden` },
                        p.meta.clientLogoData ? (React.createElement("img", { src: p.meta.clientLogoData, alt: "Logo cliente", className: "w-full h-full object-contain p-1" })) : (React.createElement("i", { className: `fas ${projectEstado === 'Completado' ? 'fa-check-circle' : projectEstado === 'En Pausa' ? 'fa-pause-circle' : projectEstado === 'En Revisión' ? 'fa-search' : 'fa-project-diagram'}` }))
                    ),
                    React.createElement("button", { onClick: (e) => { e.stopPropagation(); onDelete(p.id); }, className: "text-gray-300 hover:text-red-500 p-2 transition-colors opacity-0 group-hover:opacity-100", title: "Eliminar proyecto" }, React.createElement("i", { className: "fas fa-trash" }))
                ),
                React.createElement("h3", { className: "font-bold text-lg text-gray-800 mb-1 truncate" }, p.meta.titulo || "Sin Título"),
                React.createElement("p", { className: "text-sm text-gray-500 truncate" }, p.meta.subtitulo || "Sin descripción"),
                p.meta.cliente && (React.createElement("div", { className: "mt-2" }, React.createElement("span", { className: "apple-chip apple-chip--muted apple-chip--small" }, React.createElement("i", { className: "fas fa-building text-[10px]" }), p.meta.cliente))),
                (p.meta.responsableProyecto || p.meta.pep) && (
                    React.createElement("div", { className: "mt-3 flex flex-wrap gap-2" },
                        p.meta.responsableProyecto && (React.createElement("span", { className: "apple-chip apple-chip--muted" }, React.createElement("i", { className: "fas fa-user-gear text-[10px]" }), React.createElement("span", { className: "font-semibold mr-1" }, "Resp:"), p.meta.responsableProyecto)),
                        p.meta.ejecutorProyecto && (React.createElement("span", { className: "apple-chip apple-chip--muted" }, React.createElement("i", { className: "fas fa-hard-hat text-[10px]" }), React.createElement("span", { className: "font-semibold mr-1" }, "Ejec:"), p.meta.ejecutorProyecto)),
                        p.meta.pep && (React.createElement("span", { className: "apple-chip apple-chip--muted" }, React.createElement("i", { className: "fas fa-hashtag text-[10px]" }), React.createElement("span", { className: "font-semibold mr-1" }, "PEP:"), p.meta.pep))
                    )
                ),
                p.meta.sharepointUrl && (
                    React.createElement("div", { className: "mt-3" },
                        React.createElement("a", { href: p.meta.sharepointUrl, target: "_blank", rel: "noopener noreferrer", onClick: (e) => e.stopPropagation(), className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 text-[11px] font-bold hover:bg-blue-100 transition-colors" }, React.createElement("i", { className: "fas fa-folder-open" }), "Documentación SharePoint")
                    )
                ),
                React.createElement("div", { className: "mt-5 space-y-2" },
                    React.createElement("div", { className: "flex items-center justify-between text-xs text-gray-500" },
                        React.createElement("span", { className: "font-semibold text-[color:var(--brand-dark)]" }, stats.progress, "%"),
                        React.createElement("span", null, stats.total, " tareas")
                    ),
                    React.createElement("div", { className: "w-full h-2 rounded-full bg-gray-100 overflow-hidden flex" },
                        React.createElement("div", { className: "h-full bg-emerald-500", style: { width: w(stats.completed) } }),
                        React.createElement("div", { className: "h-full bg-amber-500", style: { width: w(stats.inProgress) } }),
                        React.createElement("div", { className: "h-full bg-rose-500", style: { width: w(stats.pending) } })
                    )
                )
            ),
            React.createElement("div", { className: "mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500" },
                React.createElement("span", { className: "apple-chip apple-chip--small" }, p.tasks.length, " Tareas"),
                React.createElement("span", { className: "apple-link" }, "Abrir ", React.createElement("i", { className: "fas fa-arrow-right" }))
            )
        )
    );
};

// --- COMPONENTE: DASHBOARD ---
const ProjectList = ({ projects, onCreate, onSelect, onDelete, onMoveProject, onBackup, onImport, theme, onToggleTheme }) => {
    const normClient = (p) => ((p.meta && p.meta.cliente) ? p.meta.cliente : 'Sin cliente').trim() || 'Sin cliente';
    const clients = Array.from(new Set(projects.map(normClient))).sort((a, b) => a.localeCompare(b, 'es'));
    const [clientFilter, setClientFilter] = useState('Todos');
    const [searchTerm, setSearchTerm] = useState('');
    const [draggingProjectId, setDraggingProjectId] = useState(null);
    const [dragOverProjectId, setDragOverProjectId] = useState(null);
    const blockClickRef = React.useRef(false);
    const [actionsOpen, setActionsOpen] = useState(false);
    const actionsRef = React.useRef(null);

    useEffect(() => {
        if (!actionsOpen) return;
        const onDocMouseDown = (e) => { if (actionsRef.current && !actionsRef.current.contains(e.target)) setActionsOpen(false); };
        document.addEventListener('mousedown', onDocMouseDown);
        return () => document.removeEventListener('mousedown', onDocMouseDown);
    }, [actionsOpen]);

    const cleanupProjectDnd = () => { setDraggingProjectId(null); setDragOverProjectId(null); setTimeout(() => { blockClickRef.current = false; }, 0); };
    const handleProjectDragStart = (e, project) => { try { e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('application/x-unitecnic-project', String(project.id)); } catch (err) { } blockClickRef.current = true; setDraggingProjectId(project.id); };
    const handleProjectDragEnd = () => { cleanupProjectDnd(); setTimeout(() => { blockClickRef.current = false; }, 200); };
    const handleProjectCardDragOver = (e, targetProject) => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; setDragOverProjectId(targetProject.id); };
    
    const handleProjectCardDrop = (e, targetProject) => {
        e.preventDefault();
        const draggedId = e.dataTransfer.getData('application/x-unitecnic-project');
        if (!draggedId || !onMoveProject) return;
        const targetEstado = normalizeProjectEstado(targetProject?.meta?.estado);
        onMoveProject(draggedId, targetEstado, targetProject.id);
        setDragOverProjectId(null); cleanupProjectDnd();
    };

    const handleSectionDragOver = (e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; };
    const handleSectionDrop = (e, targetEstado) => {
        e.preventDefault();
        const draggedId = e.dataTransfer.getData('application/x-unitecnic-project');
        if (!draggedId || !onMoveProject) return;
        onMoveProject(draggedId, targetEstado, null);
        setDragOverProjectId(null); cleanupProjectDnd();
    };

    const filteredProjects = projects.filter(p => {
        const matchesClient = clientFilter === 'Todos' || normClient(p) === clientFilter;
        const q = (searchTerm || '').toLowerCase();
        if (!q) return matchesClient;
        const m = p.meta || {};
        const hay = ((m.titulo || '') + ' ' + (m.subtitulo || '') + ' ' + (m.cliente || '') + ' ' + (m.pep || '')).toLowerCase();
        return matchesClient && hay.includes(q);
    });

    const activeProjects = filteredProjects.filter(p => normalizeProjectEstado(p?.meta?.estado) === 'En Ejecución');
    const pausedProjects = filteredProjects.filter(p => normalizeProjectEstado(p?.meta?.estado) === 'En Pausa');
    const reviewProjects = filteredProjects.filter(p => normalizeProjectEstado(p?.meta?.estado) === 'En Revisión');
    const completedProjects = filteredProjects.filter(p => normalizeProjectEstado(p?.meta?.estado) === 'Completado');
    const nonCompletedProjects = filteredProjects.filter(p => normalizeProjectEstado(p?.meta?.estado) !== 'Completado');

    // --- Executive Summary Logic ---
    const executiveSummary = (() => {
        let tasksTotal = 0, tasksOpen = 0, blockedTasks = 0, blockedProjects = 0;
        const workloadMap = {};
        const upcomingDeadlines = [];
        const today = new Date(); today.setHours(0,0,0,0);
        const nextWeek = new Date(today); nextWeek.setDate(today.getDate() + 7);

        nonCompletedProjects.forEach(p => {
            const tasks = p.tasks || [];
            const idx = buildTaskIndex(tasks);
            const stats = computeProjectStats(tasks);
            tasksTotal += stats.total;
            tasksOpen += stats.pending + stats.inProgress;
            
            let hasBlock = false;
            tasks.forEach(t => {
                const est = effectiveEstado(t, idx);
                if (est !== 'Completado') {
                    const assigned = (t.asignadoA || 'Sin asignar').trim();
                    workloadMap[assigned] = (workloadMap[assigned] || 0) + 1;
                    if (isTaskBlocked(t, idx)) { blockedTasks++; hasBlock = true; }
                    const lim = t.fechaLimite ? new Date(t.fechaLimite) : null;
                    if (lim && lim >= today && lim <= nextWeek) upcomingDeadlines.push({ tarea: t.tarea, proyecto: p.meta.titulo, fecha: t.fechaLimite });
                }
            });
            if (hasBlock) blockedProjects++;
        });
        
        return {
            projectsActive: nonCompletedProjects.length,
            progressAvg: tasksTotal > 0 ? Math.round(((tasksTotal - tasksOpen) / tasksTotal) * 100) : 0,
            tasksTotal, tasksOpen, blockedTasks, blockedProjects,
            workloadData: Object.entries(workloadMap).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count).slice(0, 4),
            sortedDeadlines: upcomingDeadlines.sort((a, b) => new Date(a.fecha) - new Date(b.fecha)).slice(0, 3)
        };
    })();

    // --- RENDER ---
    return (
        React.createElement("div", { className: "max-w-7xl mx-auto p-6 md:p-10" },
            React.createElement("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4" },
                React.createElement("div", { className: "flex items-start gap-4" },
                    React.createElement("div", { className: "w-14 h-14 rounded-2xl bg-white/70 border border-gray-200 shadow-sm flex items-center justify-center overflow-hidden shrink-0" },
                        React.createElement("img", { src: UNITECNIC_LOGO_BASE64, alt: "Unitecnic", className: "w-full h-full object-contain p-2" })
                    ),
                    React.createElement("div", null,
                        React.createElement("h1", { className: "text-3xl font-bold text-gray-900" }, "Dashboard Unitecnic"),
                        React.createElement("div", { className: "mt-4 flex flex-col sm:flex-row sm:items-center gap-3" },
                            React.createElement("div", { className: "relative group" },
                                React.createElement("i", { className: "fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs" }),
                                React.createElement("input", { type: "text", placeholder: "Buscar proyecto...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "apple-search-input" })
                            ),
                            React.createElement("select", { className: "apple-select-filter", value: clientFilter, onChange: (e) => setClientFilter(e.target.value) },
                                React.createElement("option", { value: "Todos" }, "Todos"),
                                clients.map(c => React.createElement("option", { key: c, value: c }, c))
                            )
                        )
                    )
                ),
                React.createElement("div", { className: "flex items-center gap-2 no-print" },
                    React.createElement("button", { onClick: onCreate, className: "btn-apple-primary no-print" }, React.createElement("i", { className: "fas fa-plus" }), "Nuevo"),
                    React.createElement("div", { className: "actions-menu no-print", ref: actionsRef },
                        React.createElement("button", { onClick: () => setActionsOpen(!actionsOpen), className: "btn-apple-icon" }, React.createElement("i", { className: "fas fa-ellipsis" })),
                        actionsOpen && React.createElement("div", { className: "actions-popover" },
                            React.createElement("button", { onClick: () => { setActionsOpen(false); onBackup(); }, className: "actions-item" }, React.createElement("i", { className: "fas fa-file-arrow-down" }), "Backup"),
                            React.createElement("button", { onClick: () => { setActionsOpen(false); onImport(); }, className: "actions-item" }, React.createElement("i", { className: "fas fa-file-arrow-up" }), "Importar")
                        )
                    )
                )
            ),
            
            projects.length === 0 ? (
                React.createElement("div", { className: "text-center py-24 bg-white rounded-2xl border-2 border-dashed border-gray-200" },
                    React.createElement("h3", { className: "text-xl font-semibold text-gray-700" }, "No hay proyectos"),
                    React.createElement("button", { onClick: onCreate, className: "text-blue-600 font-medium hover:underline mt-2" }, "Crear primer proyecto")
                )
            ) : (
                React.createElement("div", { className: "space-y-12" },
                    // --- EXECUTIVE SUMMARY BLOCK (Fixed syntax) ---
                    React.createElement("div", { className: "section-tapiz exec-summary p-6 rounded-2xl border" },
                        React.createElement("div", { className: "exec-header" },
                            React.createElement("div", { className: "exec-title" }, React.createElement("i", { className: "fas fa-gauge-high" }), "Resumen Ejecutivo"),
                            React.createElement("div", { className: "exec-pill" }, "Según Filtros")
                        ),
                        React.createElement("div", { className: "exec-grid" },
                            React.createElement("div", { className: "exec-card", onClick: () => setClientFilter('Todos') },
                                React.createElement("div", { className: "exec-label" }, "Activos"),
                                React.createElement("div", { className: "exec-value" }, executiveSummary.projectsActive)
                            ),
                            React.createElement("div", { className: "exec-card" },
                                React.createElement("div", { className: "exec-label" }, "Avance Global"),
                                React.createElement("div", { className: "exec-value" }, executiveSummary.progressAvg, "%")
                            ),
                            React.createElement("div", { className: "exec-card" },
                                React.createElement("div", { className: "exec-label" }, "Tareas Abiertas"),
                                React.createElement("div", { className: "exec-value" }, executiveSummary.tasksOpen)
                            ),
                            React.createElement("div", { className: "exec-card", onClick: () => window.location.hash = '#/alerts' },
                                React.createElement("div", { className: "exec-label" }, "Bloqueos"),
                                React.createElement("div", { className: "exec-value", style: { color: executiveSummary.blockedTasks > 0 ? 'red' : 'inherit' } }, executiveSummary.blockedTasks)
                            ),
                            React.createElement("div", { className: "exec-card md:col-span-2", onClick: () => window.location.hash = '#/workload' },
                                React.createElement("div", { className: "exec-label mb-2" }, "Carga de Trabajo"),
                                React.createElement("div", { className: "grid grid-cols-2 gap-4" },
                                    executiveSummary.workloadData.map((d, i) => React.createElement("div", { key: i }, 
                                        React.createElement("div", { className: "flex justify-between text-xs" }, React.createElement("span", { className: "font-bold" }, d.name), React.createElement("span", null, d.count)),
                                        React.createElement("div", { className: "h-1 bg-gray-200 rounded-full" }, React.createElement("div", { className: "h-full bg-indigo-500", style: { width: Math.min(100, d.count*10) + '%' } }))
                                    ))
                                )
                            ),
                            React.createElement("div", { className: "exec-card md:col-span-2" },
                                React.createElement("div", { className: "exec-label mb-2" }, "Próximos Vencimientos"),
                                React.createElement("div", { className: "space-y-2" },
                                    executiveSummary.sortedDeadlines.length > 0 ? executiveSummary.sortedDeadlines.map((d, i) => 
                                        React.createElement("div", { key: i, className: "flex justify-between text-xs p-2 bg-gray-50 rounded" },
                                            React.createElement("span", { className: "font-bold truncate" }, d.tarea),
                                            React.createElement("span", { className: "text-cyan-600" }, window.formatFechaES(d.fecha))
                                        )
                                    ) : React.createElement("span", { className: "text-xs italic text-gray-400" }, "Sin vencimientos cercanos")
                                )
                            )
                        )
                    ),

                    // --- PROJECT SECTIONS ---
                    React.createElement("div", { className: "section-tapiz section--ejecucion p-6 rounded-2xl border", onDragOver: handleSectionDragOver, onDrop: (e) => handleSectionDrop(e, 'En Ejecución') },
                        React.createElement("h2", { className: "text-lg font-bold text-blue-900 mb-6" }, `En Ejecución (${activeProjects.length})`),
                        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" }, activeProjects.map(p => React.createElement(ProjectCard, { key: p.id, p: p, onSelect: onSelect, onDelete: onDelete, dnd: { onDragStart: handleProjectDragStart, onDragEnd: handleProjectDragEnd, onDragOver: handleProjectCardDragOver, onDrop: handleProjectCardDrop, isDragging: draggingProjectId === p.id, isDragOver: dragOverProjectId === p.id, blockClickRef } })))
                    ),
                    React.createElement("div", { className: "section-tapiz section--pausa p-6 rounded-2xl border", onDragOver: handleSectionDragOver, onDrop: (e) => handleSectionDrop(e, 'En Pausa') },
                        React.createElement("h2", { className: "text-lg font-bold text-slate-800 mb-6" }, `En Pausa (${pausedProjects.length})`),
                        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" }, pausedProjects.map(p => React.createElement(ProjectCard, { key: p.id, p: p, onSelect: onSelect, onDelete: onDelete, dnd: { onDragStart: handleProjectDragStart, onDragEnd: handleProjectDragEnd, onDragOver: handleProjectCardDragOver, onDrop: handleProjectCardDrop, isDragging: draggingProjectId === p.id, isDragOver: dragOverProjectId === p.id, blockClickRef } })))
                    ),
                    React.createElement("div", { className: "section-tapiz section--revision p-6 rounded-2xl border", onDragOver: handleSectionDragOver, onDrop: (e) => handleSectionDrop(e, 'En Revisión') },
                        React.createElement("h2", { className: "text-lg font-bold text-violet-900 mb-6" }, `En Revisión (${reviewProjects.length})`),
                        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" }, reviewProjects.map(p => React.createElement(ProjectCard, { key: p.id, p: p, onSelect: onSelect, onDelete: onDelete, dnd: { onDragStart: handleProjectDragStart, onDragEnd: handleProjectDragEnd, onDragOver: handleProjectCardDragOver, onDrop: handleProjectCardDrop, isDragging: draggingProjectId === p.id, isDragOver: dragOverProjectId === p.id, blockClickRef } })))
                    ),
                    completedProjects.length > 0 && React.createElement("div", { className: "section-tapiz section--completado p-6 rounded-2xl border", onDragOver: handleSectionDragOver, onDrop: (e) => handleSectionDrop(e, 'Completado') },
                        React.createElement("h2", { className: "text-lg font-bold text-gray-700 mb-6 opacity-75" }, `Completados (${completedProjects.length})`),
                        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-75" }, completedProjects.map(p => React.createElement(ProjectCard, { key: p.id, p: p, onSelect: onSelect, onDelete: onDelete, dnd: { onDragStart: handleProjectDragStart, onDragEnd: handleProjectDragEnd, onDragOver: handleProjectCardDragOver, onDrop: handleProjectCardDrop, isDragging: draggingProjectId === p.id, isDragOver: dragOverProjectId === p.id, blockClickRef } })))
                    )
                )
            )
        )
    );
};

// --- COMPONENTE: VISTA PREVIA (Read Only) ---
const ProjectPreview = ({ data }) => {
    const totalTasks = data.tasks.length;
    const completedTasks = data.tasks.filter(t => t.estado === 'Completado').length;
    const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    const getStatusColor = (status) => {
        if (status === 'Completado') return 'status-completed';
        if (status === 'En Curso') return 'status-inprogress';
        return 'status-pending';
    };
    const taskIndex = buildTaskIndex(data.tasks);
    const getDependencyLabel = (task) => {
        if (!task.dependsOn) return null;
        const dep = taskIndex.get(task.dependsOn);
        return dep ? `${dep.area} - ${dep.tarea}` : 'Dependencia no encontrada';
    };

    return React.createElement("div", { className: "bg-gray-50 print-container" },
        React.createElement("div", { className: "max-w-7xl mx-auto space-y-6" },
            React.createElement("div", { className: "print-header flex justify-between items-center bg-white p-8 rounded-xl shadow-sm border border-gray-200" },
                React.createElement("div", { className: "flex items-center gap-6" },
                    data.meta.clientLogoData && React.createElement("img", { src: normalizeDataImage(data.meta.clientLogoData), className: "h-14 w-auto object-contain logo-print" }),
                    React.createElement("div", null,
                        React.createElement("h1", { className: "text-3xl font-bold text-gray-900" }, data.meta.titulo),
                        React.createElement("p", { className: "text-gray-500 mt-2 text-lg" }, data.meta.subtitulo)
                    )
                ),
                React.createElement("img", { src: UNITECNIC_LOGO_BASE64, className: "h-12 object-contain logo-print" })
            ),
            React.createElement("div", { className: "grid grid-cols-3 gap-6" },
                React.createElement("div", { className: "bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex justify-between items-center" },
                    React.createElement("div", null, React.createElement("p", { className: "text-sm text-gray-500" }, "Progreso"), React.createElement("p", { className: "text-3xl font-bold" }, progress, "%")),
                    React.createElement("div", { className: "h-16 w-16 rounded-full border-4 border-blue-500 flex items-center justify-center font-bold" }, progress, "%")
                ),
                React.createElement("div", { className: "bg-white p-6 rounded-xl shadow-sm border border-gray-200" },
                    React.createElement("p", { className: "text-sm text-gray-500" }, "Completadas"), React.createElement("p", { className: "text-3xl font-bold text-green-600" }, completedTasks)
                ),
                React.createElement("div", { className: "bg-white p-6 rounded-xl shadow-sm border border-gray-200" },
                    React.createElement("p", { className: "text-sm text-gray-500" }, "Pendientes"), React.createElement("p", { className: "text-3xl font-bold text-orange-600" }, totalTasks - completedTasks)
                )
            ),
            React.createElement("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" },
                React.createElement("table", { className: "w-full table-fixed text-left text-sm" },
                    React.createElement("thead", null,
                        React.createElement("tr", { className: "bg-gray-50 text-gray-500 text-xs uppercase" },
                            React.createElement("th", { className: "px-4 py-3 w-1/5" }, "Área"),
                            React.createElement("th", { className: "px-4 py-3 w-1/4" }, "Tarea"),
                            React.createElement("th", { className: "px-4 py-3 w-1/6" }, "Asignado"),
                            React.createElement("th", { className: "px-4 py-3 w-1/6" }, "Estado"),
                            React.createElement("th", { className: "px-4 py-3 w-1/4" }, "Detalles"),
                            React.createElement("th", { className: "px-4 py-3 w-1/6" }, "Inicio"),
                            React.createElement("th", { className: "px-4 py-3 w-1/6" }, "Límite")
                        )
                    ),
                    React.createElement("tbody", { className: "divide-y divide-gray-200" }, data.tasks.map(row => 
                        React.createElement("tr", { key: row.id, className: "hover:bg-gray-50" },
                            React.createElement("td", { className: "px-4 py-3 align-top" }, 
                                React.createElement("div", { className: "flex items-center gap-2" },
                                    React.createElement("div", { className: "w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-600" }, Icons[row.iconType] || Icons.monitor),
                                    React.createElement("span", { className: "font-medium" }, row.area)
                                )
                            ),
                            React.createElement("td", { className: "px-4 py-3 align-top" },
                                React.createElement("div", null,
                                    React.createElement("span", { className: "font-medium text-gray-700" }, row.tarea),
                                    row.subtasks && row.subtasks.map(s => React.createElement("div", { key: s.id, className: "text-xs pl-2" }, s.done ? "☑ " : "☐ ", s.text)),
                                    isTaskBlocked(row, taskIndex) && React.createElement("span", { className: "block text-xs text-red-500 bg-red-50 px-1 rounded w-fit mt-1" }, "🔒 Bloqueada")
                                )
                            ),
                            React.createElement("td", { className: "px-4 py-3 align-top" }, row.asignadoA || '-'),
                            React.createElement("td", { className: "px-4 py-3 align-top" }, React.createElement("span", { className: `px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(row.estado)}` }, row.estado)),
                            React.createElement("td", { className: "px-4 py-3 align-top text-gray-600" }, row.detalles),
                            React.createElement("td", { className: "px-4 py-3 align-top" }, window.formatFechaES(row.fechaInicio)),
                            React.createElement("td", { className: "px-4 py-3 align-top font-medium" }, window.formatFechaES(row.fechaLimite))
                        )
                    ))
                )
            )
        )
    );
};

// --- COMPONENTE: EDITOR DE PROYECTO (Completo: DnD, Subtasks, Activity) ---
const ProjectEditor = ({ project, onSave, onBack, onCancelNew, isSaving, theme }) => {
    const [data, setData] = useState(project);
    const [hasChanges, setHasChanges] = useState(false);
    const [viewMode, setViewMode] = useState(project && project.__isDraft ? 'edit' : 'preview');
    const [showGantt, setShowGantt] = useState(false);
    const [showAudit, setShowAudit] = useState(false);
    const [openIconPickerId, setOpenIconPickerId] = useState(null);
    const [showExportMenu, setShowExportMenu] = useState(false);
    const [draggingTaskId, setDraggingTaskId] = useState(null);
    const [dragOverTaskId, setDragOverTaskId] = useState(null);
    const ganttRef = React.useRef(null);
    const taskIndex = React.useMemo(() => buildTaskIndex(data.tasks || []), [data.tasks]);
    
    // Activity Log
    const activityList = React.useMemo(() => {
        const a = (data && data.audit && Array.isArray(data.audit.activity)) ? data.audit.activity : [];
        return [...a].sort((x, y) => (Number(y.ts) || 0) - (Number(x.ts) || 0));
    }, [data]);

    // --- MANEJADORES DE ESTADO (UPDATES) ---
    const updateMeta = (k, v) => {
        setData(p => addActivityToProject({ ...p, meta: { ...p.meta, [k]: v } }, `Meta: ${k} -> ${v}`));
        setHasChanges(true);
    };
    const updateTask = (id, k, v) => {
        setData(p => addActivityToProject({ ...p, tasks: p.tasks.map(t => t.id === id ? { ...t, [k]: v } : t) }, `Tarea ${id} update ${k}`));
        setHasChanges(true);
    };
    const addTask = () => {
        setData(p => addActivityToProject({ ...p, tasks: [...p.tasks, { id: 't_'+Date.now(), area: 'General', tarea: 'Nueva', estado: 'Pendiente', iconType: 'monitor' }] }, "Tarea creada"));
        setHasChanges(true);
    };
    const deleteTask = (id) => {
        if(!confirm("¿Borrar tarea?")) return;
        setData(p => addActivityToProject({ ...p, tasks: p.tasks.filter(t => t.id !== id) }, "Tarea eliminada"));
        setHasChanges(true);
    };
    
    // Subtareas logic (Recalcula estado padre)
    const updateSubtask = (taskId, subId, k, v) => {
        setData(p => {
            const nextTasks = p.tasks.map(t => {
                if(t.id !== taskId) return t;
                const newSubs = (t.subtasks || []).map(s => s.id === subId ? { ...s, [k]: v } : s);
                // Si cambiamos 'done', revisamos si todas están completas
                let newState = t.estado;
                if(k === 'done'){
                    const allDone = newSubs.every(s => s.done);
                    const anyDone = newSubs.some(s => s.done);
                    if(allDone && newSubs.length > 0) newState = 'Completado';
                    else if(anyDone) newState = 'En Curso';
                }
                return { ...t, subtasks: newSubs, estado: newState };
            });
            return { ...p, tasks: nextTasks };
        });
        setHasChanges(true);
    };
    const addSubtask = (taskId) => {
        setData(p => ({ ...p, tasks: p.tasks.map(t => t.id !== taskId ? t : { ...t, subtasks: [...(t.subtasks||[]), { id: Date.now(), text: '', done: false }] }) }));
        setHasChanges(true);
    };
    const deleteSubtask = (taskId, subId) => {
        setData(p => ({ ...p, tasks: p.tasks.map(t => t.id !== taskId ? t : { ...t, subtasks: t.subtasks.filter(s => s.id !== subId) }) }));
        setHasChanges(true);
    };

    // --- DRAG & DROP DE TAREAS ---
    const reorderTasks = (dragId, targetId) => {
        setData(prev => {
            const tasks = [...prev.tasks];
            const fromIndex = tasks.findIndex(t => t.id === dragId);
            if (fromIndex < 0) return prev;
            const [item] = tasks.splice(fromIndex, 1);
            if (!targetId) { // Dropped on table body (append)
                tasks.push(item);
            } else {
                const toIndex = tasks.findIndex(t => t.id === targetId);
                tasks.splice(toIndex, 0, item);
            }
            return { ...prev, tasks };
        });
        setHasChanges(true);
    };

    // --- LOGOS ---
    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if(!file) return;
        const reader = new FileReader();
        reader.onload = ev => updateMeta('clientLogoData', ev.target.result);
        reader.readAsDataURL(file);
    };

    // --- GANTT EFFECT ---
    useEffect(() => {
        if (!showGantt || !ganttRef.current) return;
        ganttRef.current.innerHTML = "";
        const ganttTasks = data.tasks.map(t => ({
            id: String(t.id),
            name: t.tarea,
            start: t.fechaInicio || new Date().toISOString().split('T')[0],
            end: t.fechaLimite || new Date(Date.now() + 86400000).toISOString().split('T')[0],
            progress: t.estado === 'Completado' ? 100 : t.estado === 'En Curso' ? 50 : 0,
            dependencies: t.dependsOn ? String(t.dependsOn) : ""
        }));
        if(ganttTasks.length && window.Gantt) {
            new Gantt(ganttRef.current, ganttTasks, { view_mode: 'Day', language: 'es' });
        } else {
            ganttRef.current.innerHTML = "<p class='p-4 text-gray-500'>Sin tareas o librería Gantt no cargada.</p>";
        }
    }, [showGantt, data]);

    // --- EXPORTS ---
    const exportCSV = () => {
        const headers = "Area,Tarea,Estado,Asignado,Inicio,Fin\n";
        const rows = data.tasks.map(t => `${t.area},${t.tarea},${t.estado},${t.asignadoA},${t.fechaInicio},${t.fechaLimite}`).join("\n");
        const blob = new Blob([headers + rows], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href=url; a.download = `${data.meta.titulo}.csv`; a.click();
    };

    if (viewMode === 'preview') return React.createElement("div", null, 
        React.createElement("button", { onClick: () => setViewMode('edit'), className: "fixed top-4 right-4 z-50 btn-apple" }, "Volver a Editar"),
        React.createElement(ProjectPreview, { data: data })
    );

    return React.createElement("div", { className: "min-h-screen bg-gray-50 pb-20" },
        // GANTT MODAL
        showGantt && React.createElement("div", { className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center", onClick: () => setShowGantt(false) },
            React.createElement("div", { className: "bg-white w-11/12 h-5/6 rounded-lg p-4 overflow-auto", onClick: e => e.stopPropagation() },
                React.createElement("h2", { className: "text-xl font-bold mb-4" }, "Gantt Chart"),
                React.createElement("div", { ref: ganttRef })
            )
        ),
        // AUDIT MODAL
        showAudit && React.createElement("div", { className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center", onClick: () => setShowAudit(false) },
            React.createElement("div", { className: "bg-white w-1/2 max-h-[80vh] rounded-lg p-6 overflow-auto", onClick: e => e.stopPropagation() },
                React.createElement("h2", { className: "text-xl font-bold mb-4" }, "Historial de Actividad"),
                React.createElement("ul", { className: "space-y-2" }, activityList.map(a => React.createElement("li", { key: a.id, className: "text-sm border-b pb-2" }, 
                    React.createElement("span", { className: "font-bold" }, new Date(a.ts).toLocaleString()), " - ",
                    React.createElement("span", { className: "text-blue-600" }, a.user), ": ", a.message
                )))
            )
        ),

        // HEADER
        React.createElement("div", { className: "bg-white border-b px-6 py-4 sticky top-0 z-20 flex justify-between shadow-sm" },
            React.createElement("div", { className: "flex items-center gap-4" },
                React.createElement("button", { onClick: onBack, className: "text-gray-500 hover:text-gray-900" }, React.createElement("i", { className: "fas fa-arrow-left" }), " Volver"),
                React.createElement("div", { className: "h-6 w-px bg-gray-300" }),
                React.createElement("button", { onClick: () => setViewMode('preview'), className: "text-blue-600" }, React.createElement("i", { className: "fas fa-eye" }), " Vista Previa"),
                React.createElement("button", { onClick: () => setShowGantt(true), className: "text-gray-600" }, React.createElement("i", { className: "fas fa-diagram-project" }), " Gantt"),
                React.createElement("button", { onClick: () => setShowAudit(true), className: "text-gray-600" }, React.createElement("i", { className: "fas fa-history" }), " Historial")
            ),
            React.createElement("div", { className: "flex gap-2" },
                React.createElement("button", { onClick: exportCSV, className: "btn-apple" }, "Exportar CSV"),
                React.createElement("button", { onClick: () => onSave(data), disabled: isSaving, className: "btn-apple-primary" }, isSaving ? "Guardando..." : "Guardar")
            )
        ),
        
        // FORM META
        React.createElement("div", { className: "max-w-6xl mx-auto mt-8 px-6 space-y-8" },
            React.createElement("div", { className: "bg-white p-6 rounded-xl border shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6" },
                React.createElement("div", null, React.createElement("label", { className: "text-xs font-bold uppercase text-gray-500" }, "Título"), React.createElement("input", { className: "w-full border p-2 rounded", value: data.meta.titulo, onChange: e => updateMeta('titulo', e.target.value) })),
                React.createElement("div", null, React.createElement("label", { className: "text-xs font-bold uppercase text-gray-500" }, "Cliente"), React.createElement("input", { className: "w-full border p-2 rounded", value: data.meta.cliente, onChange: e => updateMeta('cliente', e.target.value) })),
                React.createElement("div", null, React.createElement("label", { className: "text-xs font-bold uppercase text-gray-500" }, "Responsable"), React.createElement("input", { className: "w-full border p-2 rounded", value: data.meta.responsableProyecto || '', onChange: e => updateMeta('responsableProyecto', e.target.value) })),
                React.createElement("div", null, React.createElement("label", { className: "text-xs font-bold uppercase text-gray-500" }, "Estado"), 
                    React.createElement("select", { className: "w-full border p-2 rounded", value: normalizeProjectEstado(data.meta.estado), onChange: e => updateMeta('estado', e.target.value) },
                        ['En Ejecución', 'En Pausa', 'En Revisión', 'Completado'].map(o => React.createElement("option", { key: o, value: o }, o))
                    )
                ),
                React.createElement("div", { className: "col-span-2 flex items-center gap-4" },
                    React.createElement("div", { className: "flex-1" }, React.createElement("label", { className: "text-xs font-bold uppercase text-gray-500" }, "SharePoint URL"), React.createElement("input", { className: "w-full border p-2 rounded", value: data.meta.sharepointUrl || '', onChange: e => updateMeta('sharepointUrl', e.target.value) })),
                    React.createElement("div", null, React.createElement("label", { className: "text-xs font-bold uppercase text-gray-500" }, "Logo"), React.createElement("input", { type: "file", className: "block text-sm", onChange: handleLogoUpload }))
                )
            ),
            
            // TASKS TABLE
            React.createElement("div", { className: "bg-white rounded-xl border shadow-sm overflow-hidden" },
                React.createElement("div", { className: "p-4 border-b bg-gray-50 flex justify-between" },
                    React.createElement("h3", { className: "font-bold text-gray-700" }, "Planificación"),
                    React.createElement("button", { onClick: addTask, className: "btn-apple-primary text-xs" }, "+ Tarea")
                ),
                React.createElement("div", { className: "overflow-x-auto" },
                    React.createElement("table", { className: "w-full text-left" },
                        React.createElement("thead", null, React.createElement("tr", { className: "bg-gray-100 text-xs uppercase text-gray-500" },
                            React.createElement("th", { className: "p-4 w-12" }, ""), // Drag Handle
                            React.createElement("th", { className: "p-4" }, "Área"), React.createElement("th", { className: "p-4" }, "Tarea"), React.createElement("th", { className: "p-4" }, "Estado"), React.createElement("th", { className: "p-4" }, "Asignado"), React.createElement("th", { className: "p-4" }, "Fechas"), React.createElement("th", { className: "p-4" }, "")
                        )),
                        React.createElement("tbody", { className: "divide-y", onDragOver: e => e.preventDefault(), onDrop: e => { e.preventDefault(); reorderTasks(draggingTaskId, null); setDraggingTaskId(null); setDragOverTaskId(null); } }, 
                            data.tasks.map(t => 
                                React.createElement("tr", { 
                                    key: t.id, 
                                    className: `hover:bg-blue-50/50 align-top ${draggingTaskId === t.id ? 'opacity-50' : ''} ${dragOverTaskId === t.id ? 'bg-blue-100' : ''}`,
                                    draggable: true,
                                    onDragStart: () => setDraggingTaskId(t.id),
                                    onDragOver: e => { e.preventDefault(); setDragOverTaskId(t.id); },
                                    onDrop: e => { e.preventDefault(); e.stopPropagation(); reorderTasks(draggingTaskId, t.id); setDraggingTaskId(null); setDragOverTaskId(null); }
                                },
                                    // HANDLE
                                    React.createElement("td", { className: "p-4 cursor-grab text-gray-300 hover:text-gray-600" }, React.createElement("i", { className: "fas fa-grip-vertical" })),
                                    // AREA
                                    React.createElement("td", { className: "p-4" }, 
                                        React.createElement("div", { className: "flex gap-2" },
                                            React.createElement(IconPicker, { value: t.iconType, open: openIconPickerId === t.id, onToggle: () => setOpenIconPickerId(openIconPickerId === t.id ? null : t.id), onChange: v => updateTask(t.id, 'iconType', v) }),
                                            React.createElement("input", { className: "border rounded p-1 w-full text-sm", value: t.area, onChange: e => updateTask(t.id, 'area', e.target.value) })
                                        ),
                                        React.createElement("div", { className: "mt-2 text-xs text-gray-400" }, "Depende de:"),
                                        React.createElement("select", { className: "w-full border rounded text-xs", value: t.dependsOn || '', onChange: e => updateTask(t.id, 'dependsOn', e.target.value) },
                                            React.createElement("option", { value: "" }, "-"),
                                            data.tasks.filter(x => x.id !== t.id).map(x => React.createElement("option", { key: x.id, value: x.id }, x.tarea))
                                        )
                                    ),
                                    // TAREA + SUBTAREAS
                                    React.createElement("td", { className: "p-4" },
                                        React.createElement("textarea", { className: "w-full border-none bg-transparent font-medium resize-none focus:ring-0", rows: 1, value: t.tarea, onChange: e => updateTask(t.id, 'tarea', e.target.value) }),
                                        React.createElement("div", { className: "pl-2 border-l-2 mt-2 space-y-1" },
                                            (t.subtasks||[]).map(s => React.createElement("div", { key: s.id, className: "flex items-center gap-1" },
                                                React.createElement("input", { type: "checkbox", checked: s.done, onChange: e => updateSubtask(t.id, s.id, 'done', e.target.checked) }),
                                                React.createElement("input", { className: `text-xs border-none bg-transparent ${s.done ? 'line-through text-gray-400' : ''}`, value: s.text, onChange: e => updateSubtask(t.id, s.id, 'text', e.target.value), placeholder: "Subtarea..." }),
                                                React.createElement("button", { onClick: () => deleteSubtask(t.id, s.id), className: "text-gray-300 hover:text-red-500" }, "×")
                                            )),
                                            React.createElement("button", { onClick: () => addSubtask(t.id), className: "text-xs text-blue-500 mt-1" }, "+ Subtarea")
                                        )
                                    ),
                                    // ESTADO
                                    React.createElement("td", { className: "p-4" },
                                        React.createElement("select", { className: `border rounded p-1 text-sm font-bold ${t.estado === 'Completado' ? 'text-green-600' : 'text-orange-600'}`, value: t.estado, onChange: e => updateTask(t.id, 'estado', e.target.value) },
                                            React.createElement("option", { value: "Pendiente" }, "Pendiente"), React.createElement("option", { value: "En Curso" }, "En Curso"), React.createElement("option", { value: "Completado" }, "Completado")
                                        )
                                    ),
                                    // ASIGNADO
                                    React.createElement("td", { className: "p-4" }, React.createElement("input", { className: "border rounded p-1 w-full text-sm", value: t.asignadoA || '', onChange: e => updateTask(t.id, 'asignadoA', e.target.value), placeholder: "Nombre..." })),
                                    // FECHAS
                                    React.createElement("td", { className: "p-4" },
                                        React.createElement("input", { type: "date", className: "border rounded p-1 text-xs mb-1 w-full", value: t.fechaInicio || '', onChange: e => updateTask(t.id, 'fechaInicio', e.target.value) }),
                                        React.createElement("input", { type: "date", className: "border rounded p-1 text-xs w-full", value: t.fechaLimite || '', onChange: e => updateTask(t.id, 'fechaLimite', e.target.value) })
                                    ),
                                    // DELETE
                                    React.createElement("td", { className: "p-4 text-center" }, React.createElement("button", { onClick: () => deleteTask(t.id), className: "text-gray-300 hover:text-red-500" }, React.createElement("i", { className: "fas fa-times" })))
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};

// --- VIEWS ADICIONALES (Alerts & Workload) ---
const WorkloadView = ({ projects, onBack }) => {
    const workloadData = React.useMemo(() => {
        const map = {};
        projects.filter(p => p.meta.estado !== 'Completado').forEach(p => {
            (p.tasks || []).filter(t => t.estado !== 'Completado').forEach(t => {
                const assigned = t.asignadoA || "Sin Asignar";
                if (!map[assigned]) map[assigned] = { name: assigned, totalTasks: 0, projects: [] };
                map[assigned].totalTasks++;
                if (!map[assigned].projects.includes(p.meta.titulo)) map[assigned].projects.push(p.meta.titulo);
            });
        });
        return Object.values(map).sort((a,b) => b.totalTasks - a.totalTasks);
    }, [projects]);

    return React.createElement("div", { className: "p-10" },
        React.createElement("button", { onClick: onBack, className: "mb-6 btn-apple" }, "Volver"),
        React.createElement("h2", { className: "text-2xl font-bold mb-6" }, "Carga de Trabajo"),
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" },
            workloadData.map((w, i) => React.createElement("div", { key: i, className: "bg-white p-6 rounded-xl border shadow-sm" },
                React.createElement("h3", { className: "text-lg font-bold" }, w.name),
                React.createElement("p", { className: "text-3xl font-bold text-blue-600 my-2" }, w.totalTasks),
                React.createElement("p", { className: "text-sm text-gray-500" }, "Proyectos: " + w.projects.join(', '))
            ))
        )
    );
};

const AlertsView = ({ projects, onBack }) => {
    const alerts = React.useMemo(() => {
        const list = [];
        const today = new Date();
        projects.filter(p => p.meta.estado !== 'Completado').forEach(p => {
            (p.tasks || []).filter(t => t.estado !== 'Completado').forEach(t => {
                const limit = t.fechaLimite ? new Date(t.fechaLimite) : null;
                if (limit && limit < today) list.push({ type: 'Vencida', task: t, project: p });
                if (t.dependsOn) {
                    const parent = p.tasks.find(pt => pt.id === t.dependsOn);
                    if (parent && parent.estado !== 'Completado') list.push({ type: 'Bloqueada', task: t, project: p });
                }
            });
        });
        return list;
    }, [projects]);

    return React.createElement("div", { className: "p-10" },
        React.createElement("button", { onClick: onBack, className: "mb-6 btn-apple" }, "Volver"),
        React.createElement("h2", { className: "text-2xl font-bold mb-6" }, "Centro de Alertas"),
        React.createElement("div", { className: "bg-white rounded-xl border shadow-sm overflow-hidden" },
            React.createElement("table", { className: "w-full text-left" },
                React.createElement("thead", null, React.createElement("tr", { className: "bg-gray-100" }, React.createElement("th", { className: "p-4" }, "Tipo"), React.createElement("th", { className: "p-4" }, "Tarea"), React.createElement("th", { className: "p-4" }, "Proyecto"), React.createElement("th", { className: "p-4" }, "Fecha"))),
                React.createElement("tbody", null, alerts.map((a, i) => React.createElement("tr", { key: i, className: "border-b" },
                    React.createElement("td", { className: "p-4" }, React.createElement("span", { className: `px-2 py-1 rounded text-xs text-white ${a.type === 'Vencida' ? 'bg-red-500' : 'bg-orange-500'}` }, a.type)),
                    React.createElement("td", { className: "p-4" }, a.task.tarea),
                    React.createElement("td", { className: "p-4" }, a.project.meta.titulo),
                    React.createElement("td", { className: "p-4" }, a.task.fechaLimite || '-')
                )))
            )
        )
    );
};

// --- APP ROOT (LÓGICA PRINCIPAL AWS Y LOCALSTORAGE) ---
const MainApp = () => {
    const [view, setView] = useState('loading');
    const [projects, setProjects] = useState([]);
    const [currentProject, setCurrentProject] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    
    // AWS CONFIG
    const AWS_API_URL = 'https://2qucj5d6k3qspjcc76f4n45zoa0rphnp.lambda-url.eu-west-1.on.aws/';
    const PENDING_KEY = 'unitecnic_projects_pending';

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
            const res = await fetch(AWS_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
                body: JSON.stringify(pendingList)
            });
            if (res.ok) {
                localStorage.removeItem(PENDING_KEY);
                return true;
            }
        } catch (err) { console.error('Sync error', err); }
        return false;
    };

    const loadProjects = async () => {
        try {
            const res = await fetch(AWS_API_URL + '?t=' + Date.now(), { method: 'GET', headers: getAuthHeader() });
            if (!res.ok) throw new Error("AWS Error");
            const data = await res.json();
            const list = Array.isArray(data) ? data : (data.Items || []);
            localStorage.setItem('unitecnic_projects', JSON.stringify(list));
            return list;
        } catch (err) {
            console.log("Using local data");
            const saved = localStorage.getItem('unitecnic_projects');
            return saved ? JSON.parse(saved) : [];
        }
    };

    const saveProjects = async (list) => {
        setProjects(list);
        localStorage.setItem('unitecnic_projects', JSON.stringify(list));
        try {
            await fetch(AWS_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
                body: JSON.stringify(list)
            });
            localStorage.removeItem(PENDING_KEY);
        } catch (err) {
            localStorage.setItem(PENDING_KEY, JSON.stringify(list));
        }
    };

    // ROUTING
    useEffect(() => {
        const init = async () => {
            const list = await loadProjects();
            const pending = localStorage.getItem(PENDING_KEY);
            setProjects(pending ? JSON.parse(pending) : list);
            
            // Hash handling
            const hash = window.location.hash;
            if (hash.includes('project/')) {
                const id = hash.split('/')[2];
                const p = list.find(x => x.id === id);
                if (p) { setCurrentProject(p); setView('edit'); } else setView('list');
            } else if (hash.includes('workload')) {
                setView('workload');
            } else if (hash.includes('alerts')) {
                setView('alerts');
            } else {
                setView('list');
            }
            
            if (navigator.onLine) flushPendingToAWS();
        };
        init();
    }, []);

    // ACTIONS
    const handleCreate = () => {
        const newP = { id: 'p_' + Date.now(), meta: { titulo: 'Nuevo Proyecto', estado: 'En Ejecución' }, tasks: [] };
        setCurrentProject(newP);
        setView('edit');
    };

    const handleSaveProject = async (p) => {
        setIsSaving(true);
        const exists = projects.find(x => x.id === p.id);
        const list = exists ? projects.map(x => x.id === p.id ? p : x) : [...projects, p];
        await saveProjects(list);
        setIsSaving(false);
        setView('list');
        window.location.hash = '#/list';
    };

    const handleDelete = async (id) => {
        if(confirm("¿Eliminar permanentemente?")) await saveProjects(projects.filter(p => p.id !== id));
    };
    
    const handleMove = async (id, status, beforeId) => {
        // Simple drag logic for board columns
        const p = projects.find(x => x.id === id);
        if(!p) return;
        p.meta.estado = status;
        await saveProjects([...projects]); // Trigger save
    };

    const handleBackup = () => {
        const blob = new Blob([JSON.stringify({ projects, meta: { date: new Date() } })], { type: 'application/json' });
        const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'backup.json'; a.click();
    };

    const handleImport = () => {
        const input = document.createElement('input'); input.type='file';
        input.onchange = e => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = ev => {
                const data = JSON.parse(ev.target.result);
                if(data.projects) saveProjects(data.projects);
            };
            reader.readAsText(file);
        };
        input.click();
    };

    if (view === 'loading') return React.createElement("div", { className: "h-screen flex items-center justify-center" }, "Cargando...");

    return React.createElement("div", null,
        view === 'list' && React.createElement(ProjectList, { projects, onCreate: handleCreate, onSelect: p => { setCurrentProject(p); setView('edit'); window.location.hash=`#/project/${p.id}`; }, onDelete: handleDelete, onMoveProject: handleMove, onBackup: handleBackup, onImport: handleImport }),
        view === 'edit' && React.createElement(ProjectEditor, { project: currentProject, onSave: handleSaveProject, onBack: () => { setView('list'); window.location.hash='#/list'; }, isSaving }),
        view === 'workload' && React.createElement(WorkloadView, { projects, onBack: () => { setView('list'); window.location.hash='#/list'; } }),
        view === 'alerts' && React.createElement(AlertsView, { projects, onBack: () => { setView('list'); window.location.hash='#/list'; } })
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(MainApp, null));