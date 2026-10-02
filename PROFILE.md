<h1 align="center">Hi, I'm Peniel Ben</h1>
<h3 align="center">Backend, Systems &amp; Infrastructure Engineer | Open Source Contributor | Blockchain Developer</h3>

## About Me

I build reliable systems that solve difficult problems: low-level systems runtimes, compiler and transpiler tooling, enterprise datacenter virtualization, high-throughput trading platforms, and distributed Web3 systems. Simply put, I enjoy making things that work deterministically under pressure.

- **Systems, Compilers & Performance:** High-performance services in Rust and Python. Contributor to CCXT (34k+ stars), decoupling core engine runtimes, optimizing AST transpiler concurrency, and mitigating runner OOM thrashing.
- **Enterprise Datacenter & Virtualization:** Administering the Akwa Ibom State (AKS) segment of the Equinix Colocation infrastructure under the Joint Revenue Board (JRB) Programme in collaboration with the datacenter team: VMware ESXi host clustering, vCenter Server (vSphere Client), Cisco Catalyst 4-VLAN segmentation, Sophos XGS stateful NAT and IPS policies, Windows Server 2025 Active Directory/GPO, and Synology RAID 5 Veeam backup pipelines.
- **Security First:** Capability-based sandboxing and secure state mechanics (NEAR AI IronClaw WASM plugins, 53 review comments); boundaries are designed in from day zero, not patched in later.
- **Distributed Systems & Blockchain:** Built on Solana, NEAR, and TON: private payment infrastructure (Veil), staking programs, real estate smart contracts, and published crates on crates.io.

## Tech Stack

### Systems, Languages & Frameworks

![Rust](https://img.shields.io/badge/Rust-Axum_|_Actix_Web_|_Tokio-000000?style=flat-square&logo=rust&logoColor=white)
![Python](https://img.shields.io/badge/Python-FastAPI_|_Django_|_Celery-3776AB?style=flat-square&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Compilers_|_Node.js-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Solana](https://img.shields.io/badge/Solana-Anchor_|_Web3-14F195?style=flat-square&logo=solana&logoColor=black)

### Virtualization, Infrastructure & Networking

![VMware](https://img.shields.io/badge/VMware-ESXi_|_vCenter_|_vSphere-607078?style=flat-square&logo=vmware&logoColor=white)
![Windows Server](https://img.shields.io/badge/Windows_Server-2025_|_Active_Directory_|_GPO-0078D4?style=flat-square&logo=windows&logoColor=white)
![Microsoft Azure](https://img.shields.io/badge/Microsoft_Azure-Linux_VPS-0089D6?style=flat-square&logo=microsoftazure&logoColor=white)
![Traefik](https://img.shields.io/badge/Traefik-Edge_Reverse_Proxy-24A1C1?style=flat-square&logo=traefik&logoColor=white)
![Coolify](https://img.shields.io/badge/Coolify-Self--Hosted_PaaS-6B46C1?style=flat-square)
![Cisco](https://img.shields.io/badge/Cisco-Catalyst_|_VLANs-1BA0D7?style=flat-square&logo=cisco&logoColor=white)
![Sophos](https://img.shields.io/badge/Sophos-XGS_Firewall_|_NAT_|_IPS-003B71?style=flat-square&logo=sophos&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-DevOps-2496ED?style=flat-square&logo=docker&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-Ubuntu_|_Debian-FCC624?style=flat-square&logo=linux&logoColor=black)
![Synology](https://img.shields.io/badge/Synology-DSM_RAID_5-0072C6?style=flat-square&logo=synology&logoColor=white)
![Veeam](https://img.shields.io/badge/Veeam-Backup_&_Replication-00B336?style=flat-square)

### Databases & Observability

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Relational_DB-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![SQL Server](https://img.shields.io/badge/SQL_Server-2025_|_SSMS-CC292B?style=flat-square&logo=microsoftsqlserver&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-Caching-DC382D?style=flat-square&logo=redis&logoColor=white)
![GlitchTip](https://img.shields.io/badge/GlitchTip-Error_Tracking-E6522C?style=flat-square)
![Sentry](https://img.shields.io/badge/Sentry-APM_&_Telemetry-362D59?style=flat-square&logo=sentry&logoColor=white)

## Featured Work & Open Source

### CCXT - Rust Engine Decoupling & Transpiler Concurrency Architecture
Architectural overhaul of CCXT's Rust engine and TypeScript transpile pipeline across ~200 crypto exchanges (34k+ stars). Decoupled the hand-written engine runtime into `rust/ccxt-core` with zero breaking changes, capped transpile worker fan-out to prevent runner OOM terminations, and added automated `mold`/`lld` high-performance linker detection.
→ **GitHub PR:** [#30723](https://github.com/ccxt/ccxt/pull/30723)

---

### JRB & AKIRS Enterprise Datacenter, Linux Cluster Migration & Edge Architecture
Administered the Akwa Ibom State (AKS) segment of the enterprise digital tax infrastructure deployed at Equinix Colocation Datacenter under the Joint Revenue Board (JRB) Programme, collaborating with the datacenter engineering team where and when necessary: clustered dual HPE ProLiant Gen10 compute nodes running VMware ESXi 8.x and vCenter Server, 4-VLAN Cisco Catalyst segmentation (MGMT, LAN, DMZ, Storage), and Sophos XGS stateful NAT rules and IPS threat protection. Orchestrated the migration of 4 application servers to hardened Linux within the isolated DMZ configuring static Netplan network interfaces, configured dual-IP multi-homing to mitigate DDoS risks, routed edge traffic through Windows bastion and Sophos firewall to Traefik, and managed automated deployments via self-hosted Coolify supporting public-facing government services including the state revenue portal (akirs.ak.gov.ng).
→ **Live Portal:** [akirs.ak.gov.ng](https://akirs.ak.gov.ng/)

---

### CAFX
High-frequency trading platform. Core order-processing pipeline in Rust, strategy and analytics in Python, concurrent multi-exchange market data ingestion.
→ **Live:** [cafx.io](https://cafx.io)

---

### AKIRS Revenue Data Integrity Platform
Secure data preparation platform for the Akwa Ibom Internal Revenue Service: heuristic column mapping, identity field validation, and guided duplicate resolution.
→ **GitHub:** [Penivera/akirs-data-cleaner](https://github.com/Penivera/akirs-data-cleaner)

---

### AKIRS Revenue Intelligence Platform
Business discovery and tax intelligence across all 31 Akwa Ibom LGAs with a local RAG assistant.
→ **GitHub:** [Penivera/akirs-auto](https://github.com/Penivera/akirs-auto)

---

### IronClaw (NEAR AI)
Added GitHub and Discord WASM components with capability-based security to NEAR AI's agentic OS. 1,756 lines across 8 files, merged after 53 review comments.
→ **GitHub PR:** [#34](https://github.com/nearai/ironclaw/pull/34)

---

### Veil
Private payment infrastructure on Solana featuring NFC contactless tap-to-pay (turning phones into POS terminals), WhatsApp conversational invoicing, Umbra privacy payroll, and Pajramp fiat off-ramps.
→ **GitHub:** [Penivera/veil](https://github.com/Penivera/veil)

---

### SeaORM Pro (SeaQL)
Native Actix-web integration for the SeaORM admin panel: 3,277 additions, JWT auth, and a GraphQL playground.
→ **GitHub PR:** [#3](https://github.com/SeaQL/sea-orm-pro/pull/3)

---

### telegram-rs
Async-first Rust library for the Telegram Bot API published on crates.io, with TON Connect v2 and WASM bridge.
→ **crates.io:** [telegram-rs-2](https://crates.io/crates/telegram-rs-2) · **GitHub:** [Penivera/Telegram-rs](https://github.com/Penivera/Telegram-rs)

## Leadership & Achievements

- **Systems, Backend & Automation Engineer:** Faschcom (Azure Linux VPS, GlitchTip & Sentry telemetry, automation pipelines)
- **Dev Lead:** CAFX (high-frequency trading platform)
- **Campus Lead:** SuperteamNG, University of Uyo
- **Blockchain Lead:** GDG on Campus, University of Uyo
- **NEAR Protocol Bounty Winner (3x):** including the Qbit bounty
- **Socrates Interfaculty Debate Champion:** UNIUYO Faculty of Computing; overall Best Speaker, undefeated
- Brought the **Solana Students Africa Campus Tour** to UNIUYO (Nov 2025)
- Published **"The Code vs The Crowd: NEAR vs TON"** on Coinsbench; technical articles on [Medium](https://medium.com/@penielben40)

## Let's Connect

- **Portfolio & Resume:** [peni.dev](https://peni.dev) & [peni.dev/resume.html](https://peni.dev/resume.html)
- **Email:** [hello@peni.dev](mailto:hello@peni.dev) / [penielben40@gmail.com](mailto:penielben40@gmail.com)
- **GitHub:** [@Penivera](https://github.com/Penivera)
- **LinkedIn:** [peniel-ben](https://linkedin.com/in/peniel-ben-065792266)
- **X (Twitter):** [@Penivera001](https://x.com/Penivera001)
- **Telegram:** [@Penivera](https://t.me/Penivera)
