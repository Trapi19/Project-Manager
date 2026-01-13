
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
    tasks.forEach(t => idx.set(t.id, t));
    return idx;
};
const isTaskBlocked = (task, taskIndex) => {
    const depId = task.dependsOn;
    if (!depId)
        return false;
    const dep = taskIndex.get(depId);
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
    tasks.forEach(t => {
        const e = effectiveEstado(t, idx);
        if (e === 'Completado')
            completed++;
        else if (e === 'En Curso')
            inProgress++;
        else if (e === 'Pendiente')
            pending++;
        else
            pending++;
    });
    const progress = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { total, completed, inProgress, pending, progress };
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
                p.meta.pep && (React.createElement("span", { className: "apple-chip apple-chip--muted" },
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
// --- COMPONENTE: DASHBOARD ---
const ProjectList = ({ projects, onCreate, onSelect, onDelete, onMoveProject, onBackup, onImport, theme, onToggleTheme }) => {
    const normClient = (p) => ((p.meta && p.meta.cliente) ? p.meta.cliente : 'Sin cliente').trim() || 'Sin cliente';
    const clients = Array.from(new Set(projects.map(normClient))).sort((a, b) => a.localeCompare(b, 'es'));
    const [clientFilter, setClientFilter] = useState('Todos');
    const [searchTerm, setSearchTerm] = useState('');
    // --- DRAG & DROP (sin librerías externas; compatible con abrir index.html en local) ---
    const [draggingProjectId, setDraggingProjectId] = useState(null);
    const [dragOverProjectId, setDragOverProjectId] = useState(null);
    const blockClickRef = React.useRef(false);
    // --- MENÚ DE ACCIONES (Backup / Importar) ---
    const [actionsOpen, setActionsOpen] = useState(false);
    const actionsRef = React.useRef(null);
    useEffect(() => {
        if (!actionsOpen)
            return;
        const onDocMouseDown = (e) => {
            if (actionsRef.current && !actionsRef.current.contains(e.target))
                setActionsOpen(false);
        };
        const onKey = (e) => {
            if (e.key === 'Escape')
                setActionsOpen(false);
        };
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
        // Permite volver a hacer click inmediatamente después de soltar
        setTimeout(() => { blockClickRef.current = false; }, 0);
    };
    const readDraggedProjectId = (e) => {
        try {
            return e.dataTransfer.getData('application/x-unitecnic-project') || e.dataTransfer.getData('text/plain');
        }
        catch (err) {
            return '';
        }
    };
    const handleProjectDragStart = (e, project) => {
        try {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('application/x-unitecnic-project', String(project.id));
            e.dataTransfer.setData('text/plain', String(project.id));
        }
        catch (err) { }
        blockClickRef.current = true;
        setDraggingProjectId(project.id);
    };
    const handleProjectDragEnd = () => {
        cleanupProjectDnd();
        // Evita que un drag dispare un click "Abrir" al soltar
        setTimeout(() => { blockClickRef.current = false; }, 200);
    };
    const handleProjectCardDragOver = (e, targetProject) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        setDragOverProjectId(targetProject.id);
    };
    const handleProjectCardDrop = (e, targetProject) => {
        var _a;
        e.preventDefault();
        const draggedId = readDraggedProjectId(e);
        if (!draggedId || !onMoveProject)
            return;
        const targetEstado = normalizeProjectEstado((_a = targetProject === null || targetProject === void 0 ? void 0 : targetProject.meta) === null || _a === void 0 ? void 0 : _a.estado);
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
        if (!draggedId || !onMoveProject)
            return;
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
    const activeProjects = filteredProjects.filter(p => { var _a; return normalizeProjectEstado((_a = p === null || p === void 0 ? void 0 : p.meta) === null || _a === void 0 ? void 0 : _a.estado) === 'En Ejecución'; });
    const pausedProjects = filteredProjects.filter(p => { var _a; return normalizeProjectEstado((_a = p === null || p === void 0 ? void 0 : p.meta) === null || _a === void 0 ? void 0 : _a.estado) === 'En Pausa'; });
    const reviewProjects = filteredProjects.filter(p => { var _a; return normalizeProjectEstado((_a = p === null || p === void 0 ? void 0 : p.meta) === null || _a === void 0 ? void 0 : _a.estado) === 'En Revisión'; });
    const completedProjects = filteredProjects.filter(p => { var _a; return normalizeProjectEstado((_a = p === null || p === void 0 ? void 0 : p.meta) === null || _a === void 0 ? void 0 : _a.estado) === 'Completado'; });
    // --- RESUMEN EJECUTIVO (CENTRO DE CONTROL) ---
    const nonCompletedProjects = filteredProjects.filter(p => { var _a; return normalizeProjectEstado((_a = p === null || p === void 0 ? void 0 : p.meta) === null || _a === void 0 ? void 0 : _a.estado) !== 'Completado'; });
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
        let redProjects = 0;
        let blockedProjects = 0;
        let blockedTasks = 0;
        const redProjectDetails = [];
        const blockedProjectDetails = [];
        const workloadMap = {};
        const upcomingDeadlines = [];

        nonCompletedProjects.forEach(p => {
            const tasks = p.tasks || [];
            const stats = computeProjectStats(tasks);
            const pid = String(p.id || '');
            const title = (p.meta?.titulo) || 'Proyecto';
            const resp = (p.meta && p.meta.responsableProyecto) ? String(p.meta.responsableProyecto) : 'Sin asignar';

            tasksTotal += stats.total || 0;
            tasksOpen += (stats.pending || 0) + (stats.inProgress || 0);
            tasksCompleted += stats.completed || 0;

            // Carga de trabajo (por persona asignada a cada tarea)

            const idx = buildTaskIndex(tasks);
            tasks.forEach(t => {
                const est = effectiveEstado(t, idx);
                // Carga de trabajo por persona (ASIGNADO A): cuenta tareas abiertas (Pendiente/En curso).
                if (est !== 'Completado') {
                    const assigned = (t.asignadoA != null && String(t.asignadoA).trim()) ? String(t.asignadoA).trim() : 'Sin asignar';
                    workloadMap[assigned] = (workloadMap[assigned] || 0) + 1;
                }
                const lim = parseISO(t.fechaLimite);
                // Vencimientos a 7 días
                if (est !== 'Completado' && lim && lim >= today && lim <= nextWeek) {
                    upcomingDeadlines.push({ tarea: t.tarea, proyecto: title, fecha: t.fechaLimite, responsable: resp });
                }
            });

            // Bloqueos
            if (tasks.length) {
                const blockedCount = tasks.filter(t => normalizeEstado(t.estado) !== 'Completado' && isTaskBlocked(t, idx)).length;
                if (blockedCount > 0) {
                    blockedProjects += 1;
                    blockedTasks += blockedCount;
                    blockedProjectDetails.push({ id: pid, title, blockedCount });
                }
            }

            // Alertas Rojas
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
            progressAvg: tasksTotal > 0 ? Math.round((tasksCompleted / tasksTotal) * 100) : 0,
            tasksTotal,
            tasksOpen,
            redProjects,
            redProjectDetails,
            blockedProjects,
            blockedTasks,
            blockedProjectDetails,
            workloadData: Object.entries(workloadMap).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count).slice(0, 4),
            sortedDeadlines: upcomingDeadlines.sort((a, b) => new Date(a.fecha) - new Date(b.fecha)).slice(0, 3)
        };
    })();

    const __gpEscapeHtml = (v) => {
        const s = String(v == null ? '' : v);
        return s
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };
    const __gpShowModal = (title, bodyHtml) => {
        try {
            const existing = document.getElementById('gp-modal-overlay');
            if (existing) existing.remove();
            const overlay = document.createElement('div');
            overlay.id = 'gp-modal-overlay';
            overlay.style.cssText = [
                'position:fixed',
                'inset:0',
                'background:rgba(0,0,0,0.45)',
                'display:flex',
                'align-items:center',
                'justify-content:center',
                'z-index:9999',
                'padding:16px'
            ].join(';');

            const panel = document.createElement('div');
            panel.style.cssText = [
                'background:#ffffff',
                'border-radius:16px',
                'max-width:760px',
                'width:100%',
                'box-shadow:0 20px 60px rgba(0,0,0,0.25)',
                'border:1px solid rgba(0,0,0,0.10)',
                'overflow:hidden'
            ].join(';');

            panel.innerHTML = `
                <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 18px;border-bottom:1px solid rgba(0,0,0,0.08);">
                    <div style="font-weight:800;font-size:16px;color:#111827;">${__gpEscapeHtml(title)}</div>
                    <button id="gp-modal-close" type="button"
                        style="border:1px solid rgba(0,0,0,0.12);background:#ffffff;border-radius:10px;padding:8px 12px;font-weight:700;color:#111827;cursor:pointer;">
                        Cerrar
                    </button>
                </div>
                <div style="padding:16px 18px;color:#111827;font-size:14px;line-height:1.5;max-height:70vh;overflow:auto;">
                    ${bodyHtml}
                </div>
            `;
            overlay.appendChild(panel);
            document.body.appendChild(overlay);

            const cleanup = () => {
                try { overlay.remove(); } catch {}
                document.removeEventListener('keydown', onKeyDown);
            };
            const onKeyDown = (ev) => { if (ev.key === 'Escape') cleanup(); };

            overlay.addEventListener('click', (e) => { if (e.target === overlay) cleanup(); });
            const btn = overlay.querySelector('#gp-modal-close');
            if (btn) btn.addEventListener('click', cleanup);
            document.addEventListener('keydown', onKeyDown);
        } catch (e) {
            console.error(e);
            alert('No se pudo mostrar el detalle.');
        }
    };

    const showBlockDetails = () => {
        try {
            const blocked = (executiveSummary.blockedProjectDetails || []);
            const red = (executiveSummary.redProjectDetails || []);

            const parts = [];

            // Bloqueos por dependencias
            parts.push(`<div style="margin-bottom:14px;">
                <div style="font-weight:800;margin-bottom:6px;">Bloqueos por dependencias</div>
                <div style="color:#6B7280;margin-bottom:10px;">Una tarea queda bloqueada si depende de otra que aún no está en “Completado”.</div>
            </div>`);

            if (blocked.length) {
                const items = blocked
                    .slice()
                    .sort((a, b) => (b.blockedCount || 0) - (a.blockedCount || 0))
                    .map(x => `<li><span style="font-weight:700;">${__gpEscapeHtml(x.title)}</span>: ${__gpEscapeHtml(x.blockedCount)}</li>`)
                    .join('');
                parts.push(`<ul style="margin:0 0 16px 18px; padding:0; list-style:disc;">${items}</ul>`);
            } else {
                parts.push(`<div style="margin-bottom:16px;color:#111827;">No hay tareas bloqueadas por dependencias en los proyectos filtrados.</div>`);
            }

            // Alertas (rojo)
            parts.push(`<div style="margin-top:6px;margin-bottom:10px;">
                <div style="font-weight:800;margin-bottom:6px;">Alertas (rojo)</div>
                <div style="color:#6B7280;">
                    Vencidas: existe al menos 1 tarea abierta con fecha límite anterior a hoy. <br/>
                    Muchas pendientes: ≥60% de tareas en “Pendiente” (mín. 5 tareas) y avance &lt; 50%.
                </div>
            </div>`);

            if (red.length) {
                const items = red
                    .map(x => `<li><span style="font-weight:700;">${__gpEscapeHtml(x.title)}</span>: ${__gpEscapeHtml((x.reasons || []).join(' y '))}</li>`)
                    .join('');
                parts.push(`<ul style="margin:0 0 6px 18px; padding:0; list-style:disc;">${items}</ul>`);
            } else {
                parts.push(`<div style="color:#111827;">No hay proyectos en rojo con los filtros actuales.</div>`);
            }

            __gpShowModal('Detalle de bloqueos y alertas', parts.join(''));
        }
        catch (e) {
            console.error(e);
            alert('No se pudo mostrar el detalle de bloqueos y alertas.');
        }
    };
    return (React.createElement("div", { className: "max-w-7xl mx-auto p-6 md:p-10" },
        React.createElement("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4" },
            React.createElement("div", { className: "flex items-start gap-4" },
                React.createElement("div", { className: "w-14 h-14 rounded-2xl bg-white/70 border border-gray-200 shadow-sm flex items-center justify-center overflow-hidden shrink-0" },
                    React.createElement("img", { src: UNITECNIC_LOGO_BASE64, alt: "Unitecnic", className: "w-full h-full object-contain p-2" })),
                React.createElement("div", null,
                    React.createElement("h1", { className: "text-3xl font-bold text-gray-900" }, "Dashboard Unitecnic"),
                    React.createElement("p", { className: "text-gray-500 mt-1 flex items-center gap-2" },
                        React.createElement("i", { className: "fas fa-hdd text-orange-500" }),
                        " Modo Cloud (AWS)"),
                    React.createElement("div", { className: "mt-4 flex flex-col sm:flex-row sm:items-center gap-3" },
                        React.createElement("div", { className: "relative group" },
                            React.createElement("i", { className: "fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs group-focus-within:text-[color:var(--brand)] transition-colors" }),
                            React.createElement("input", { type: "text", placeholder: "Buscar proyecto...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), onKeyDown: (e) => { if (e.key === 'Escape') setSearchTerm(''); }, className: "apple-search-input" })),
                        React.createElement("div", { className: "flex items-center gap-2" },
                            React.createElement("span", { className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-2" }, "Cliente"),
                            React.createElement("select", { className: "apple-select-filter", value: clientFilter, onChange: (e) => setClientFilter(e.target.value) },
                                React.createElement("option", { value: "Todos" }, "Todos"),
                                clients.map(c => React.createElement("option", { key: c, value: c }, c))))))),
            React.createElement("div", { className: "flex items-center gap-2 no-print" },
                React.createElement("button", { onClick: onCreate, className: "btn-apple-primary no-print", title: "Crear nuevo proyecto" },
                    React.createElement("i", { className: "fas fa-plus" }),
                    "Nuevo"),
                React.createElement("div", { className: "actions-menu no-print", ref: actionsRef },
                    React.createElement("button", { type: "button", className: "btn-apple-icon", title: "Acciones", "aria-label": "Acciones", onClick: () => setActionsOpen(o => !o) },
                        React.createElement("i", { className: "fas fa-ellipsis" })),
                    actionsOpen && (React.createElement("div", { className: "actions-popover", role: "menu", "aria-label": "Acciones" },
                        React.createElement("button", { type: "button", className: "actions-item", role: "menuitem", onClick: () => { setActionsOpen(false); onBackup(); } },
                            React.createElement("i", { className: "fas fa-file-arrow-down" }),
                            React.createElement("span", null, "Backup (JSON)")),
                        React.createElement("button", { type: "button", className: "actions-item", role: "menuitem", onClick: () => { setActionsOpen(false); onImport(); } },
                            React.createElement("i", { className: "fas fa-file-arrow-up" }),
                            React.createElement("span", null, "Importar\u2026"))))))),
        projects.length === 0 ? (React.createElement("div", { className: "text-center py-24 bg-white rounded-2xl border-2 border-dashed border-gray-200" },
            React.createElement("div", { className: "text-gray-300 text-6xl mb-6" },
                React.createElement("i", { className: "fas fa-folder-open" })),
            React.createElement("h3", { className: "text-xl font-semibold text-gray-700" }, "No hay proyectos activos"),
            React.createElement("p", { className: "text-gray-400 mt-2 mb-6" }, "Gestiona tus instalaciones y mantenimientos desde aqu\u00ED."),
            React.createElement("button", { onClick: onCreate, className: "text-blue-600 font-medium hover:underline" }, "Crear primer proyecto"))) : (React.createElement("div", { className: "space-y-12" },
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
// --- CUADRO DE MANDO INTERACTIVO ---
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
                            React.createElement("span", { className: "px-2 py-1 rounded-full border border-[color:rgba(239,68,68,0.3)] text-red-700 bg-red-50/50 text-[10px] font-bold" }, "Pausa: ", pausedProjects.length))),

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

                    // 4. BLOQUEOS
                
                      React.createElement("div", { className: "exec-card cursor-pointer hover:ring-2 hover:ring-red-100 transition-all", onClick: () => window.location.hash = '#/alerts', title: "Abrir centro de alertas" },
                        React.createElement("div", { className: "exec-card-top" },
                            React.createElement("div", null,
                                React.createElement("div", { className: "exec-label" }, "Bloqueos y Alertas"),
                                React.createElement("div", { className: "exec-value", style: { color: executiveSummary.blockedTasks > 0 ? '#ef4444' : 'inherit' } }, executiveSummary.blockedTasks),
                                React.createElement("div", { className: "exec-note" }, executiveSummary.blockedTasks > 0 ? "Requiere atención" : "Sin incidencias")),
                            React.createElement("div", { className: "exec-card-icon exec-card-icon-warn" },
                                React.createElement("i", { className: "fas fa-shield-halved" }))),
                        React.createElement("div", { className: "mt-4 flex items-center gap-2" },
                            React.createElement("span", { className: `h-2 w-2 rounded-full ${executiveSummary.blockedTasks > 0 ? 'bg-red-500 animate-pulse' : 'bg-gray-300'}` }),
                            React.createElement("span", { className: "text-[10px] font-bold text-gray-400 uppercase tracking-tight" }, executiveSummary.blockedProjects, " Proyectos afectados"))),

// 5. CARGA POR RESPONSABLE (DOBLE - ÍNDIGO)
React.createElement("div", { 
    className: "exec-card md:col-span-2 cursor-pointer hover:ring-2 hover:ring-indigo-100 transition-all", // Clases visuales
    onClick: () => window.location.hash = '#/workload', // La magia del clic
    title: "Ver detalle detallado por persona"
},
    React.createElement("div", { className: "exec-card-top mb-5" }, // Aumentado margen inferior
        React.createElement("div", { className: "exec-label" }, "Carga por Persona"),
        React.createElement("div", { className: "exec-card-icon" }, React.createElement("i", { className: "fas fa-users" }))),
    React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5" }, // Más espacio entre columnas
        executiveSummary.workloadData.map((item, i) => (
            React.createElement("div", { key: i },
                React.createElement("div", { className: "flex justify-between text-sm mb-2" }, // Aumentado de 11px a sm (14px)
                    React.createElement("span", { className: "font-bold truncate" }, item.name),
                    React.createElement("span", { className: "text-gray-500 font-medium" }, item.count)),
                React.createElement("div", { className: "w-full h-2 bg-gray-200 rounded-full overflow-hidden" }, // Aumentado grosor de h-1 a h-2
                    React.createElement("div", { className: "h-full bg-indigo-500", style: { width: `${Math.min(100, (item.count / 10) * 100)}%` } }))
            )
        )))),

// 6. PRÓXIMOS VENCIMIENTOS (DOBLE - CIAN)
React.createElement("div", { className: "exec-card md:col-span-2" },
    React.createElement("div", { className: "exec-card-top mb-5" },
        React.createElement("div", { className: "exec-label" }, "Próximos Vencimientos"),
        React.createElement("div", { className: "exec-card-icon" }, React.createElement("i", { className: "fas fa-calendar-day" }))),
    React.createElement("div", { className: "space-y-3" }, // Aumentado espacio entre filas
        executiveSummary.sortedDeadlines.length > 0 ? executiveSummary.sortedDeadlines.map((item, i) => (
            React.createElement("div", { key: i, className: "flex items-center justify-between p-3 rounded-xl bg-black/5" }, // Más padding y redondeado
                React.createElement("div", { className: "min-w-0 flex-1" },
                    React.createElement("div", { className: "text-sm font-bold truncate" }, item.tarea), // Aumentado de 11px a sm
                    React.createElement("div", { className: "text-[11px] text-gray-500 truncate mt-0.5" }, item.proyecto)), // Aumentado de 9px a 11px
                React.createElement("div", { className: "ml-4 text-[12px] font-bold text-cyan-600 bg-cyan-50 px-2 py-1 rounded-md" }, window.formatFechaES(item.fecha))) // Fecha más grande y con fondo
        )) : React.createElement("p", { className: "text-sm italic text-gray-400 p-2" }, "Sin vencimientos cercanos")))
                )
            ), // <--- ESTE ES EL QUE FALTABA (Cierra la sección entera del Resumen Ejecutivo)

            // A PARTIR DE AQUÍ LAS SECCIONES DE PROYECTOS QUEDAN FUERA
            React.createElement("div", { className: "section-tapiz section--ejecucion p-6 rounded-2xl border", "data-estado-seccion": "En Ejecuci\u00F3n", onDragOver: handleSectionDragOver, onDrop: (e) => handleSectionDrop(e, 'En Ejecución') },
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

            React.createElement("div", { className: "section-tapiz section--pausa p-6 rounded-2xl border", "data-estado-seccion": "En Pausa", onDragOver: handleSectionDragOver, onDrop: (e) => handleSectionDrop(e, 'En Pausa') },
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

            React.createElement("div", { className: "section-tapiz section--revision p-6 rounded-2xl border", "data-estado-seccion": "En Revisi\u00F3n", onDragOver: handleSectionDragOver, onDrop: (e) => handleSectionDrop(e, 'En Revisión') },
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

            completedProjects.length > 0 && (React.createElement("div", { className: "section-tapiz section--completado p-6 rounded-2xl border", "data-estado-seccion": "Completado", onDragOver: handleSectionDragOver, onDrop: (e) => handleSectionDrop(e, 'Completado') },
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
    const totalTasks = data.tasks.length;
    const completedTasks = data.tasks.filter(t => t.estado === 'Completado').length;
    const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
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
                        React.createElement("p", { className: "text-gray-500 mt-2 text-lg" }, data.meta.subtitulo))),
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
                React.createElement("div", { className: "w-full" },
                    React.createElement("table", { className: "w-full table-fixed text-left border-collapse text-sm" },
                        React.createElement("thead", null,
                            React.createElement("tr", { className: "bg-gray-50 text-gray-500 text-xs uppercase tracking-wider" },
                                React.createElement("th", { className: "px-4 py-3 font-medium whitespace-normal break-words w-1/5" }, "\u00C1rea"),
                                React.createElement("th", { className: "px-4 py-3 font-medium whitespace-normal break-words w-1/4" }, "Tarea"),
                                                                React.createElement("th", { className: "px-4 py-3 font-medium whitespace-normal break-words w-1/6 internal-only" }, "Asignado"),
React.createElement("th", { className: "px-4 py-3 font-medium whitespace-normal break-words w-1/6" }, "Estado"),
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

            // 5. Columna DETALLES (Limpia)
            React.createElement("td", { className: "px-4 py-3 align-top whitespace-normal break-words" },
                React.createElement("span", { className: "text-sm text-gray-600" }, (_a = row.detalles) !== null && _a !== void 0 ? _a : '')),

            // 6. Columna FECHA INICIO
            React.createElement("td", { className: "px-4 py-3 align-top whitespace-normal break-words" },
                React.createElement("span", { className: `text-sm ${(row.fechaLimite || '').includes('Dic') || (row.fechaLimite || '').includes('Urgente') ? 'text-red-600 font-medium' : 'text-gray-500'}` }, window.formatFechaES(row.fechaInicio))),

            // 7. Columna FECHA LÍMITE
            React.createElement("td", { className: "px-4 py-3 align-top whitespace-normal break-words" },
                React.createElement("span", { className: `text-sm ${(row.fechaLimite || '').includes('Dic') || (row.fechaLimite || '').includes('Urgente') ? 'text-red-600 font-medium' : 'text-gray-500'}` }, window.formatFechaES(row.fechaLimite)))
        ));
    }))))))));
};
// --- COMPONENTE: EDITOR DE PROYECTO ---
const ProjectEditor = ({ project, onSave, onBack, onCancelNew, isSaving, theme, onToggleTheme }) => {
    var _a;
    const [data, setData] = useState(project);
    const [hasChanges, setHasChanges] = useState(false);
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
    const [showGantt, setShowGantt] = useState(false);
    const [showAudit, setShowAudit] = useState(false);
    const [ganttWarnings, setGanttWarnings] = useState([]);
    const ganttRef = React.useRef(null);
    const parseISODate = (s) => {
        if (!s)
            return null;
        const t = String(s).trim();
        if (!/^\d{4}-\d{2}-\d{2}$/.test(t))
            return null;
        const d = new Date(t + "T00:00:00");
        return isNaN(d.getTime()) ? null : d;
    };
    const fmtISO = (d) => {
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, "0");
        const dd = String(d.getDate()).padStart(2, "0");
        return `${yyyy}-${mm}-${dd}`;
    };
    // Formato de fecha ES: usa window.formatFechaES() global
    const addDays = (d, n) => {
        const x = new Date(d);
        x.setDate(x.getDate() + n);
        return x;
    };
    const makeGanttTasks = (projectData) => {
        // Fuente única de verdad: projectData.tasks (lo mismo que pinta la tabla)
        const tasks = ((projectData === null || projectData === void 0 ? void 0 : projectData.tasks) || []);
        const idx = new Map(tasks.map(t => [t.id, t]));
        const warnings = [];
        const isCompleted = (t) => String((t === null || t === void 0 ? void 0 : t.estado) || "").toLowerCase().includes("complet");
        const result = [];
        for (const t of tasks) {
            // Fechas reales (si existen). Si faltan, inferimos lo mínimo para que Gantt renderice.
            let start = parseISODate(t.fechaInicio);
            let end = parseISODate(t.fechaLimite);
            if (!start && end)
                start = addDays(end, -1);
            if (!end && start)
                end = addDays(start, 1);
            if (!start && !end) {
                // Sin fechas: lo situamos hoy+1 para que sea visible y avisamos.
                const today = new Date();
                start = today;
                end = addDays(today, 1);
                warnings.push(`La tarea "${t.tarea}" no tiene fechas (Inicio/Límite). Se muestra temporalmente en Hoy.`);
            }
            if (start && end && start > end) {
                warnings.push(`Revisa fechas: "${t.tarea}" tiene Inicio (${fmtISO(start)}) posterior a Límite (${fmtISO(end)}).`);
            }
            // Estado -> progreso y color (mismo criterio que UI)
            const estado = String(t.estado || "").toLowerCase();
            let progress = estado.includes("complet") ? 100 : estado.includes("curso") ? 50 : 0;
            let customClass = estado.includes("complet") ? "bar-completed"
                : estado.includes("curso") ? "bar-in-progress"
                    : (estado.includes("próximo") || estado.includes("proximo")) ? "bar-upcoming"
                        : "bar-pending";
            // Dependencias: si existe dependsOn y la tarea dependiente NO está completada, marcamos como bloqueada
            // Nota: NO condicionamos a la fecha de fin (eso era lo que desincronizaba Gantt vs tabla).
            let isBlocked = false;
            if (t.dependsOn) {
                const dep = idx.get(t.dependsOn);
                if (!dep) {
                    isBlocked = true;
                    warnings.push(`La tarea "${t.tarea}" tiene una dependencia inexistente (ID ${t.dependsOn}).`);
                }
                else if (!isCompleted(dep)) {
                    isBlocked = true;
                    warnings.push(`La tarea "${t.tarea}" se muestra como Bloqueada por "${dep.area} - ${dep.tarea}" hasta que esté Completada.`);
                }
            }
            // Si el propio estado contiene "bloque", también lo tratamos como bloqueada
            if (estado.includes("bloque"))
                isBlocked = true;
            let name = `${t.area || ""} · ${t.tarea || ""}`.trim();
            if (isBlocked) {
                progress = 0;
                customClass = "bar-blocked";
                name = `🔒 ${name}`;
            }
            result.push({
                id: String(t.id),
                name,
                start: fmtISO(start),
                end: fmtISO(end),
                progress,
                dependencies: t.dependsOn ? String(t.dependsOn) : "",
                custom_class: customClass
            });
        }
        return { tasks: result, warnings };
    };
    useEffect(() => {
        if (!showGantt)
            return;
        if (!ganttRef.current)
            return;
        ganttRef.current.innerHTML = "";
        const built = makeGanttTasks(data);
        const gt = built.tasks || [];
        setGanttWarnings(built.warnings || []);
        if (!gt.length)
            return;
        new Gantt(ganttRef.current, gt, {
            view_mode: "Day",
            language: "es"
        });
    }, [showGantt, data]);
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
        const hasLogo = !!(data.meta.clientLogoData && String(data.meta.clientLogoData).trim());
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
        // Nota: no borramos el mapa global para no perder logos reutilizables.
    };
    const updateTask = (id, field, value) => {
        const TASK_LABELS = {
            area: 'Área',
            tarea: 'Tarea',
            estado: 'Estado',
            detalles: 'Detalles',
            fechaInicio: 'Fecha inicio',
            fechaFin: 'Fecha fin',
            fechaLimite: 'Fecha límite',
            dependsOn: 'Dependencia',
            asignadoA: 'Asignado a'
        };
        setData(prev => {
            const prevTasks = Array.isArray(prev.tasks) ? prev.tasks : [];
            const targetTask = prevTasks.find(t => t.id === id);
            const fromVal = targetTask ? targetTask[field] : undefined;

            const nextTasks = prevTasks.map(t => {
                if (t.id !== id) return t;

                const updated = { ...t, [field]: value };
                if (field === 'dependsOn') {
                    const idx = buildTaskIndex(prevTasks);
                    const blocked = isTaskBlocked(updated, idx);
                    if (blocked && normalizeEstado(updated.estado) !== 'Completado')
                        updated.estado = 'Pendiente';
                }
                return updated;
            });

            let nextProject = { ...prev, tasks: nextTasks };

            if (fromVal !== value) {
                const label = TASK_LABELS[field] || field;
                const taskName = (targetTask && (targetTask.tarea || targetTask.detalles || targetTask.id)) ? (targetTask.tarea || targetTask.detalles || targetTask.id) : String(id);
                nextProject = addActivityToProject(
                    nextProject,
                    `Tarea "${taskName}": ${label}: "${(fromVal ?? '')}" → "${(value ?? '')}"`,
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
            const targetTask = prevTasks.find(t => t.id === id);
            const taskName = targetTask ? (targetTask.tarea || targetTask.detalles || targetTask.id) : String(id);
            const nextTasks = prevTasks.filter(t => t.id !== id);
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
    return (React.createElement("div", { className: "min-h-screen bg-gray-50 pb-20 relative" },
        showGantt && (React.createElement("div", { className: "fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4 no-print", onClick: () => { setShowGantt(false); setGanttWarnings([]); } },
            React.createElement("div", { className: "bg-white w-full max-w-6xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden", onClick: (e) => e.stopPropagation() },
                React.createElement("div", { className: "px-5 py-4 border-b flex items-center justify-between" },
                    React.createElement("div", { className: "min-w-0" },
                        React.createElement("div", { className: "text-sm text-gray-500" }, "Gantt del proyecto"),
                        React.createElement("div", { className: "font-semibold text-gray-900 truncate" }, ((_a = data === null || data === void 0 ? void 0 : data.meta) === null || _a === void 0 ? void 0 : _a.titulo) || "Sin título")),
                    React.createElement("button", { onClick: () => { setShowGantt(false); setGanttWarnings([]); }, className: "px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm" }, "Cerrar")),
                React.createElement("div", { className: "p-4" },
                    ganttWarnings.length > 0 && (React.createElement("div", { className: "mb-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900" },
                        React.createElement("div", { className: "font-semibold mb-1" }, "Avisos de planificaci\u00F3n"),
                        React.createElement("ul", { className: "list-disc pl-5 space-y-1" }, ganttWarnings.slice(0, 12).map((w, i) => (React.createElement("li", { key: i }, w)))),
                        ganttWarnings.length > 12 && (React.createElement("div", { className: "mt-2 text-xs text-amber-800" }, "Se muestran 12 avisos. Corrige dependencias/fechas para eliminar el resto.")))),
                    ((data === null || data === void 0 ? void 0 : data.tasks) || []).length === 0 ? (React.createElement("div", { className: "text-sm text-gray-500" }, "No hay tareas en este proyecto.")) : (React.createElement("div", { ref: ganttRef, className: "w-full overflow-auto" })),
                    React.createElement("div", { className: "mt-3 text-xs text-gray-400" },
                        "Nota: el Gantt se genera a partir de las mismas tareas que la tabla (",
                        React.createElement("b", null, "fechaInicio"),
                        " / ",
                        React.createElement("b", null, "fechaLimite"),
                        " y dependencias)."))))),
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
                    React.createElement("span", { className: "hidden sm:inline" }, viewMode === 'edit' ? 'Vista previa' : 'Editar proyecto'))),
            React.createElement("div", { className: "flex gap-3 relative" },
                isNewDraft && (React.createElement("button", { onClick: handleCancelNew, className: "px-4 py-2 rounded-lg text-sm font-medium bg-slate-800 hover:bg-slate-700 text-white/90 border border-white/10 transition", title: "Descartar el nuevo proyecto" }, "Cancelar")),
                
                (!isNewDraft && viewMode === 'edit') && (React.createElement("button", { onClick: handleCancelEdit, className: "px-4 py-2 rounded-lg text-sm font-medium bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 transition shadow-sm", title: "Descartar cambios y volver" }, "Cancelar")),

                React.createElement("button", { onClick: handleSave, disabled: isSaving, className: `px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${hasChanges ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}` },
                    isSaving ? React.createElement("i", { className: "fas fa-circle-notch fa-spin" }) : React.createElement("i", { className: "fas fa-save" }),
                    React.createElement("span", { className: "hidden sm:inline" }, isSaving ? 'Guardando...' : 'Guardar Progreso')),
                React.createElement("button", { onClick: () => setShowGantt(true), className: "px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm", title: "Ver Gantt del proyecto" },
                    React.createElement("i", { className: "fas fa-diagram-project" }),
                    React.createElement("span", { className: "hidden sm:inline" }, "Gantt")),
                React.createElement("button", { onClick: () => setShowAudit(true), className: "px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm" },
                        React.createElement("i", { className: "fas fa-history" }),
                        " ",
                        React.createElement("span", { className: "hidden sm:inline" }, "Historial")),
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
        viewMode === 'preview' ? (React.createElement("div", { className: "py-8" },
            React.createElement(ProjectPreview, { data: data }))) : (React.createElement("div", { className: "max-w-6xl mx-auto mt-8 px-6 space-y-8" },
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
                        React.createElement("div", null,
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
                            React.createElement("div", { className: "flex items-center gap-3" },
                                React.createElement("div", { className: "h-12 w-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden" }, data.meta.clientLogoData ? (React.createElement("img", { src: data.meta.clientLogoData, alt: "Logo cliente", className: "w-full h-full object-contain p-1" })) : (React.createElement("i", { className: "fas fa-image text-slate-400" }))),
                                React.createElement("div", { className: "flex items-center gap-2" },
                                    React.createElement("label", { className: "inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 cursor-pointer text-sm font-semibold text-gray-700 transition" },
                                        React.createElement("i", { className: "fas fa-upload" }),
                                        "Subir logo",
                                        React.createElement("input", { type: "file", accept: "image/*", className: "hidden", onChange: (e) => { var _a; return handleClientLogoUpload((_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0]); } })),
                                    data.meta.clientLogoData && (React.createElement("button", { type: "button", className: "inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 text-sm font-semibold text-gray-700 transition", onClick: handleClientLogoRemove, title: "Quitar logo" },
                                        React.createElement("i", { className: "fas fa-trash" }),
                                        "Quitar")))),
                            React.createElement("p", { className: "text-xs text-gray-500 mt-2" }, "Consejo: al subir un logo se guarda para este cliente y se aplicar\u00E1 autom\u00E1ticamente en futuros proyectos cuando escribas el mismo nombre de cliente.")),
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
                React.createElement("div", { className: "overflow-x-auto" },
                    React.createElement("table", { className: "w-full min-w-[1200px] text-left border-collapse" },
                        React.createElement("thead", null,
                            React.createElement("tr", { className: "bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200" },
                                React.createElement("th", { className: "px-6 py-3 font-semibold whitespace-nowrap min-w-[320px]" }, "\u00C1REA / TIPO"),
                                React.createElement("th", { className: "px-6 py-3 font-semibold whitespace-nowrap min-w-[280px]" }, "TAREA"),
                                React.createElement("th", { className: "px-6 py-3 font-semibold whitespace-nowrap min-w-[160px]" }, "ESTADO"),
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
                                        React.createElement("div", { className: "flex flex-wrap items-center gap-2 pl-12 min-w-0" },
                                            React.createElement("div", { className: "text-[11px] text-gray-500 shrink-0" }, "Depende de"),
                                            React.createElement("select", { className: "flex-1 min-w-[240px] border border-gray-200 rounded-lg px-2 py-1 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-[color:var(--brand)]", value: task.dependsOn || '', onChange: (e) => updateTask(task.id, 'dependsOn', e.target.value ? Number(e.target.value) : null) },
                                                React.createElement("option", { value: "" }, "(ninguna)"),
                                                data.tasks
                                                    .filter(t => t.id !== task.id)
                                                    .map(t => (React.createElement("option", { key: t.id, value: t.id }, `${t.area || ''} - ${t.tarea || ''}`.slice(0, 60))))),
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
                        React.createElement("i", { className: "fas fa-times" })
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
                                    React.createElement("i", { className: "fas fa-times" }))))))))))))));
};

// --- COMPONENTE: DETALLE DE CARGA DE TRABAJO ---
const WorkloadView = ({ projects, onBack }) => {
    
    // LÓGICA (Sin cambios, solo agrupación)
    const workloadData = React.useMemo(() => {
        const map = {};
        projects.forEach(p => {
            if (String(p.meta?.estado) === 'Completado') return;
            const activeTasks = (p.tasks || []).filter(t => String(t.estado) !== 'Completado');

            activeTasks.forEach(t => {
                let assignedTo = (t.asignadoA || '').trim();
                if (!assignedTo) assignedTo = "Sin Asignar";
                const key = assignedTo;

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
                map[key].projectsMap[p.id].tasks.push(t);
            });
        });
        return Object.values(map)
            .map(person => ({ ...person, projects: Object.values(person.projectsMap) }))
            .sort((a, b) => b.totalTasks - a.totalTasks);
    }, [projects]);

    // RENDERIZADO (Usando clases wl-* y variables del sistema)
    return (
        React.createElement("div", { className: "wl-view-container" },
            // Barra Superior Sticky
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

            // Contenido Principal
            React.createElement("div", { className: "max-w-7xl mx-auto p-6" },
                workloadData.length === 0 
                ? React.createElement("div", { style: { textAlign: 'center', padding: '60px 0', color: 'var(--muted)' } }, 
                    React.createElement("i", { className: "fas fa-check-circle", style: { fontSize: '40px', marginBottom: '16px', opacity: 0.5 } }),
                    React.createElement("p", null, "No hay tareas pendientes asignadas.")
                  )
                : workloadData.map((person, idx) => (
                    React.createElement("div", { key: idx, className: "wl-person-card" },
                        
                        // Encabezado de la Tarjeta (Persona)
                        React.createElement("div", { className: "wl-person-header" },
                            React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '16px' } },
                                // Avatar
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
                            // Badge Carga
                            React.createElement("div", { className: `wl-load-badge ${person.totalTasks >= 5 ? 'high' : 'normal'}` },
                                person.totalTasks >= 5 ? "Carga Alta" : "Normal"
                            )
                        ),

                        // Cuerpo (Grid de Proyectos)
                        React.createElement("div", { className: "wl-grid-projects" },
                            person.projects.map(proj => (
                                React.createElement("div", { key: proj.id, className: "wl-subcard", onClick: () => window.location.hash = `#/project/${proj.id}` },
                                    
                                    // Título Proyecto
                                    React.createElement("div", { className: "wl-proj-title", title: proj.title }, proj.title),
                                    
                                    // Cliente (Tag)
                                    React.createElement("div", { className: "wl-client-tag" },
                                        React.createElement("i", { className: "fas fa-building" }), 
                                        proj.client
                                    ),
                                    
                                    // Lista de Tareas
                                    React.createElement("div", null,
                                        proj.tasks.map(t => (
                                            React.createElement("div", { key: t.id, className: "wl-task-row" },
                                                // Punto de estado
                                                React.createElement("i", { 
                                                    className: "fas fa-circle", 
                                                    style: { 
                                                        fontSize: '6px', 
                                                        marginTop: '6px', 
                                                        color: String(t.estado).includes('Curso') ? '#f59e0b' : 'var(--muted)' 
                                                    } 
                                                }),
                                                // Texto tarea
                                                React.createElement("div", { className: "wl-task-text" }, 
                                                    t.tarea,
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

// --- COMPONENTE: VISTA DETALLADA DE ALERTAS (MEJORADO CON FILTROS) ---
const AlertsView = ({ projects, onBack }) => {
    // 1. Estados para filtros (Igual que en el Dashboard)
    const [searchTerm, setSearchTerm] = React.useState('');
    const [clientFilter, setClientFilter] = React.useState('Todos');

    // 2. Helpers para normalizar datos
    const normClient = (p) => ((p.meta && p.meta.cliente) ? p.meta.cliente : 'Sin cliente').trim() || 'Sin cliente';
    const clients = React.useMemo(() => 
        Array.from(new Set(projects.map(normClient))).sort((a, b) => a.localeCompare(b, 'es')),
    [projects]);

    // 3. Filtrado de proyectos (Para que coincida con el Dashboard)
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

    // 4. Lógica de cálculo de alertas (Usando filteredProjects)
    const alertsData = React.useMemo(() => {
        const blockedProjects = [];
        const redProjects = [];
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const parseISO = (iso) => {
            if (!iso) return null;
            const t = String(iso).trim();
            if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) return null;
            const [y, m, d] = t.split('-').map(n => parseInt(n, 10));
            return new Date(y, (m || 1) - 1, d || 1);
        };

        filteredProjects.forEach(p => {
            // Ignorar completados (igual que Dashboard)
            const pState = (p.meta && p.meta.estado) ? p.meta.estado : 'En Ejecución';
            if (String(pState).toLowerCase() === 'completado') return;

            const tasks = p.tasks || [];
            const idx = buildTaskIndex(tasks);
            const blockedTasks = [];
            let hasOverdue = false;
            
            tasks.forEach(t => {
                const est = effectiveEstado(t, idx);
                
                // A. Bloqueos
                if (est !== 'Completado' && isTaskBlocked(t, idx)) {
                    let blockerName = "Desconocido";
                    if(t.dependsOn) {
                        const parent = idx.get(t.dependsOn);
                        if(parent) blockerName = parent.tarea;
                    }
                    blockedTasks.push({ ...t, blockerName });
                }

                // B. Vencimientos
                if (est !== 'Completado') {
                    const lim = parseISO(t.fechaLimite);
                    if (lim && lim < today) hasOverdue = true;
                }
            });

            // Agrupar Bloqueos
            if (blockedTasks.length > 0) {
                blockedProjects.push({
                    id: p.id,
                    title: p.meta.titulo || 'Sin título',
                    client: p.meta.cliente || 'Varios',
                    items: blockedTasks
                });
            }

            // Agrupar Alertas Rojas (Lógica exacta del Dashboard)
            const stats = computeProjectStats(tasks);
            const tooMany = (stats.total >= 5 && (stats.pending / stats.total) >= 0.6 && stats.progress < 50);
            
            if (hasOverdue || tooMany) {
                const reasons = [];
                if (hasOverdue) reasons.push("Tareas vencidas");
                if (tooMany) reasons.push("Exceso de pendientes (>60%)");
                
                redProjects.push({
                    id: p.id,
                    title: p.meta.titulo || 'Sin título',
                    client: p.meta.cliente || 'Varios',
                    reasons: reasons
                });
            }
        });

        return { blockedProjects, redProjects };
    }, [filteredProjects]);

    return (
        React.createElement("div", { className: "wl-view-container" },
            // HEADER STICKY CON FILTROS
            React.createElement("div", { className: "wl-header-sticky no-print", style: { flexDirection: 'column', alignItems: 'stretch', gap: '12px', height: 'auto', padding: '12px 16px' } },
                
                // Fila superior: Título y Volver
                React.createElement("div", { className: "flex justify-between items-center" },
                    React.createElement("div", { className: "flex items-center gap-4" },
                        React.createElement("button", { onClick: onBack, className: "btn-apple", style: { height: '36px', fontSize: '13px' } },
                            React.createElement("i", { className: "fas fa-arrow-left" }), " Volver"
                        ),
                        React.createElement("div", { style: { width: '1px', height: '24px', background: 'var(--border)' } }),
                        React.createElement("h2", { className: "wl-title" },
                            React.createElement("i", { className: "fas fa-shield-halved", style: { color: '#ef4444' } }), " Centro de Alertas"
                        )
                    )
                ),

                // Fila inferior: BARRA DE FILTROS (Nueva)
                React.createElement("div", { className: "flex flex-col sm:flex-row gap-3 bg-gray-50 p-2 rounded-lg border border-gray-100" },
                    React.createElement("div", { className: "relative group flex-1" },
                        React.createElement("i", { className: "fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" }),
                        React.createElement("input", { 
                            type: "text", 
                            placeholder: "Buscar en alertas...", 
                            value: searchTerm, 
                            onChange: (e) => setSearchTerm(e.target.value), 
                            className: "w-full pl-8 pr-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" 
                        })
                    ),
                    React.createElement("select", { 
                        className: "py-1.5 px-3 text-sm border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 outline-none", 
                        value: clientFilter, 
                        onChange: (e) => setClientFilter(e.target.value) 
                    },
                        React.createElement("option", { value: "Todos" }, "Todos los clientes"),
                        clients.map(c => React.createElement("option", { key: c, value: c }, c))
                    )
                )
            ),

            React.createElement("div", { className: "max-w-7xl mx-auto p-6 space-y-8" },
                // SECCIÓN 1: PROYECTOS BLOQUEADOS
                React.createElement("div", null,
                    React.createElement("h3", { className: "text-lg font-bold text-gray-800 mb-4 flex items-center gap-2" },
                        React.createElement("i", { className: "fas fa-lock text-orange-500" }), " Bloqueos por Dependencias",
                        React.createElement("span", { className: "bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs" }, alertsData.blockedProjects.length)
                    ),
                    alertsData.blockedProjects.length === 0 
                    ? React.createElement("div", { className: "p-8 text-center text-gray-400 bg-white rounded-xl border border-dashed" }, 
                        searchTerm || clientFilter !== 'Todos' ? "No hay bloqueos con estos filtros." : "No hay tareas bloqueadas."
                      )
                    : React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" },
                        alertsData.blockedProjects.map(proj => (
                            React.createElement("div", { key: proj.id, className: "wl-person-card", style: { padding: '16px' }, onClick: () => window.location.hash = `#/project/${proj.id}` },
                                React.createElement("div", { className: "flex justify-between items-start mb-3" },
                                    React.createElement("div", null,
                                        React.createElement("div", { className: "font-bold text-gray-800" }, proj.title),
                                        React.createElement("div", { className: "text-xs text-gray-500" }, proj.client)
                                    ),
                                    React.createElement("i", { className: "fas fa-chevron-right text-gray-300 text-xs" })
                                ),
                                React.createElement("div", { className: "space-y-2" },
                                    proj.items.map(t => (
                                        React.createElement("div", { key: t.id, className: "text-xs bg-orange-50 border border-orange-100 p-2 rounded-lg text-orange-800" },
                                            React.createElement("div", { className: "font-bold mb-0.5" }, React.createElement("i", { className: "fas fa-lock mr-1" }), t.tarea),
                                            React.createElement("div", { className: "opacity-80" }, "Esperando a: ", React.createElement("span", { className: "font-semibold" }, t.blockerName))
                                        )
                                    ))
                                )
                            )
                        ))
                    )
                ),
                // SECCIÓN 2: ALERTAS ROJAS
                React.createElement("div", null,
                    React.createElement("h3", { className: "text-lg font-bold text-gray-800 mb-4 flex items-center gap-2" },
                        React.createElement("i", { className: "fas fa-bell text-red-500" }), " Alertas Críticas",
                        React.createElement("span", { className: "bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs" }, alertsData.redProjects.length)
                    ),
                    alertsData.redProjects.length === 0 
                    ? React.createElement("div", { className: "p-8 text-center text-gray-400 bg-white rounded-xl border border-dashed" }, 
                        searchTerm || clientFilter !== 'Todos' ? "No hay alertas rojas con estos filtros." : "Todo en orden."
                      )
                    : React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" },
                        alertsData.redProjects.map(proj => (
                            React.createElement("div", { key: proj.id, className: "wl-person-card", style: { padding: '16px', borderLeft: '4px solid #ef4444' }, onClick: () => window.location.hash = `#/project/${proj.id}` },
                                React.createElement("div", { className: "flex justify-between items-start mb-2" },
                                    React.createElement("div", null,
                                        React.createElement("div", { className: "font-bold text-gray-800" }, proj.title),
                                        React.createElement("div", { className: "text-xs text-gray-500" }, proj.client)
                                    ),
                                    React.createElement("i", { className: "fas fa-exclamation-circle text-red-500" })
                                ),
                                React.createElement("div", { className: "flex flex-wrap gap-2 mt-3" },
                                    proj.reasons.map((r, i) => (
                                        React.createElement("span", { key: i, className: "px-2 py-1 bg-red-100 text-red-700 rounded text-[10px] font-bold uppercase tracking-wide" }, r)
                                    ))
                                )
                            )
                        ))
                    )
                )
            )
        )
    );
};

// --- APP PRINCIPAL ---
const MainApp = () => {
    const [theme, setTheme] = React.useState(() => localStorage.getItem('gp_theme') || 'light');
    const AWS_API_URL = 'https://2qucj5d6k3qspjcc76f4n45zoa0rphnp.lambda-url.eu-west-1.on.aws/';

    React.useEffect(() => {
        document.documentElement.classList.toggle('theme-dark', theme === 'dark');
        localStorage.setItem('gp_theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));
    const [view, setView] = useState('loading');
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
            empresa: "UNITECNIC", 
            estado: "En Ejecución", 
            responsableProyecto: "", 
            pep: "",
            sharepointUrl: "" // <--- Nuevo campo
        },
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
                setView('workload'); // Definiremos este estado ahora
                return;
            }
            if (!parts.length || parts[0] === 'list' || parts[0] === 'dashboard') {
                setCurrentProject(null);
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
            
            setProjects(effectiveList);
            if (!window.location.hash) setRoute('#/list');
            applyRouteFromHash(effectiveList);
            
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
    if (view === 'loading')
        return React.createElement("div", { className: "h-screen flex items-center justify-center bg-gray-50" },
            React.createElement("div", { className: "loader" }));
    return (React.createElement("div", null,
        React.createElement("input", { ref: importFileInputRef, type: "file", accept: "application/json,.json", className: "hidden", onChange: handleImportFileSelected }),
        view === 'workload' && (React.createElement(WorkloadView, { projects: projects, onBack: () => { setView('list'); setRoute('#/list'); } })),
        view === 'alerts' && (React.createElement(AlertsView, { projects: projects, onBack: () => { setView('list'); setRoute('#/list'); } })),
        view === 'list' && (React.createElement(ProjectList, { projects: projects, onCreate: createProject, onSelect: selectProject, onDelete: deleteProject, onMoveProject: moveProject, onBackup: exportBackupJSON, onImport: openImportPicker, theme: theme, onToggleTheme: toggleTheme })),
        view === 'editor' && currentProject && (React.createElement(ProjectEditor, { project: currentProject, onSave: saveProject, onBack: () => { setCurrentProject(null); setView('list'); setRoute('#/list'); }, onCancelNew: () => { setCurrentProject(null); setView('list'); setRoute('#/list'); }, isSaving: isSaving, theme: theme, onToggleTheme: toggleTheme })),
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
        backupToast && (React.createElement("div", { className: "fixed top-[calc(env(safe-area-inset-top)+16px)] left-1/2 -translate-x-1/2 bg-gray-900/80 text-white px-5 py-3 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 flex items-center gap-3 z-[9999] pointer-events-none no-print" },
            React.createElement("div", { className: "h-10 w-10 rounded-full bg-white/10 flex items-center justify-center" },
                React.createElement("i", { className: "fas fa-file-arrow-down" })),
            React.createElement("div", null,
                React.createElement("div", { className: "font-semibold leading-tight" }, "Backup generado"),
                React.createElement("div", { className: "text-xs text-white/70" }, "Archivo .json descargado con proyectos y logos.")))),
        React.createElement("button", { type: "button", onClick: toggleTheme, className: `theme-fab no-print ${theme === 'dark' ? 'night' : 'day'}`, title: theme === 'dark' ? 'Cambiar a modo día' : 'Cambiar a modo noche', "aria-label": theme === 'dark' ? 'Cambiar a modo día' : 'Cambiar a modo noche' }, theme === 'dark' ? (React.createElement("i", { className: "fas fa-moon" })) : (React.createElement("i", { className: "fas fa-sun" })))));
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(MainApp, null));


