<h1 align="center">Hi, I'm Peniel Ben</h1>
<h3 align="center">Systems, Backend &amp; Blockchain Engineer</h3>

## About Me

I build resilient, high-availability systems that solve high-stakes operational and technical challenges: low-level system runtimes, developer build pipelines, enterprise datacenter virtualization, high-throughput trading platforms, and distributed Web3 systems. Simply put, I engineer infrastructure and software that performs reliably under pressure.

- **Systems Development, Compilers & Performance:** High-performance systems and services in Rust and Python. Core contributor to CCXT (34k+ stars, merged PR #30723), decoupling core engine runtimes, accelerating developer build velocity, and eliminating CI runner OOM crashes. Building fault-tolerant distributed systems like Bridge (multi-VM gossip network).
- **Application Infrastructure & Virtualization:** Administered the Akwa Ibom State (AKS) application infrastructure segment at Equinix Colocation Datacenter under the Joint Revenue Board (JRB) Programme on hardware and networks provisioned by the datacenter team: maintaining 99.9% uptime for the state tax portal, migrating core application servers to hardened Linux in an isolated DMZ, configuring multi-homed dual-IP routing against DDoS attacks, and running automated Coolify deployments and Veeam backup verification.
- **Security First:** Zero-trust architecture, capability-based sandboxing, and perimeter defense (NEAR AI IronClaw WASM plugins); boundaries are designed in from day zero, not patched in later.
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

### CCXT - Rust Engine Decoupling & Transpiler Concurrency Architecture *(Merged)*
Architectural overhaul of CCXT's Rust engine and TypeScript transpile pipeline across ~200 crypto exchanges (34k+ stars). Decoupled the hand-written engine runtime into `rust/ccxt-core` with zero breaking changes, capped transpile worker fan-out to prevent runner OOM terminations, and added automated `mold`/`lld` high-performance linker detection.
→ **GitHub PR (Merged):** [#30723](https://github.com/ccxt/ccxt/pull/30723)

---

### AKIRS & JRB Production Application Segment & Linux Cluster Migration
Engineered and administered the Akwa Ibom State (AKS) application infrastructure segment deployed at Equinix Colocation Datacenter under the Joint Revenue Board (JRB) Programme, configuring virtual machines and networks on the ESXi cluster provisioned by the datacenter engineering team. Maintained 99.9% operational uptime for the public tax portal (akirs.ak.gov.ng), orchestrated the zero-downtime migration of 4 application servers to hardened Linux within the allocated DMZ, configured dual-IP multi-homing to neutralize DDoS risks, routed edge traffic to Traefik, and managed automated deployments via self-hosted Coolify.
→ **Live Portal:** [akirs.ak.gov.ng](https://akirs.ak.gov.ng/)

---

### CAFX
High-frequency trading platform. Core order-processing pipeline in Rust, strategy and analytics in Python, concurrent multi-exchange market data ingestion.
→ **Live:** [cafx.io](https://cafx.io)

---

### Bridge - Fault-Tolerant Multi-VM Gossip Network
Fault-tolerant distributed gossip network built in Rust for reliable communication across isolated virtual machine environments. Implements decentralized peer discovery, heartbeat-based liveness monitoring, and deterministic message propagation without centralized orchestration.
→ **GitHub:** [Penivera/Bridge](https://github.com/Penivera/Bridge)

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
