# The Emerging AI Compute Model in Quantitative Finance

**Research completed: 25 September 2026**
**Evidence cutoff: 25 September 2026**

---

## 1. Blunt One-Page Verdict

**Are leading quantitative trading firms changing how they consume AI compute?**

Yes, but the pattern is narrower and earlier-stage than the thesis suggests.

A small number of elite quantitative trading firms and market makers --- Jane Street, Hudson River Trading, and to a lesser degree IMC and Flow Traders --- are building multi-source GPU compute arrangements that combine owned data centres with specialist GPU cloud providers and hyperscalers. The evidence for this is strong at the top end. Jane Street has publicly shown its own Texas data centre (May 2026), announced a $7 billion CoreWeave commitment ($6 billion in cloud services plus $1 billion in equity, reported April 2026), and is reported to have committed $13 billion to Crusoe Energy (reported August--September 2026, confirmation status uncertain). Hudson River Trading has published a video showing its own data centre built inside a mountain (March 2026), has a Google Cloud partnership for Hyperdisk storage (May 2025), is credibly reported to have signed a multi-billion dollar CoreWeave deal (August 2026), and has a Lambda relationship. IMC has announced a CoreWeave deployment.

**What is strongly supported:**
- A handful of frontier quantitative trading firms are assembling portfolios of GPU capacity from multiple sources: owned, hyperscaler, and specialist cloud.
- The visible driver is access to scarce, high-performance GPU capacity (H100, H200, Blackwell) and the networking fabric needed for distributed training.
- These firms are building custom internal research infrastructure --- Jane Street's Hivebucks internal allocation system, HRT's Blobby distributed filesystem --- that goes beyond simply renting GPUs.

**What must be narrowed:**
- The thesis implies a broad trend. The public evidence names perhaps five to seven firms. The vast majority of hedge funds, systematic macro funds, and multi-manager platforms have not disclosed comparable arrangements.
- The claim that firms are building "a governed research platform that turns fragmented capacity into faster, reliable and repeatable experimentation" is plausible but largely unverified. Shopify's published SkyPilot architecture (January 2026) shows this pattern exists outside finance, and Point72 is listed as a SkyPilot customer. But no quantitative trading firm has published equivalent architectural detail.
- The distinction between "buying compute" and "investing in a GPU cloud provider" is critical. Jane Street is both an investor in and customer of CoreWeave. The $13 billion Crusoe figure appears in YouTube commentary channels but has not been confirmed by either party through official channels accessible to this research.

**What I would bet against:**
- That this pattern will quickly spread to the broader hedge fund industry. Most firms lack the engineering depth, scale, and willingness to invest in bespoke infrastructure.
- That any of these firms has, as of September 2026, a fully operational multi-provider workload platform comparable to what Shopify described. They are assembling the capacity pieces; the orchestration layer is likely still under construction.
- That more compute automatically produces better trading returns. No public evidence connects GPU investment to alpha generation. The mechanism by which faster experimentation produces better outcomes remains a hypothesis.

**What could change my mind:**
- A published engineering blog from Jane Street, HRT, or Point72 describing their internal workload platform across multiple providers.
- CoreWeave or Crusoe S-1/10-K filings disclosing quantitative trading firms as material revenue customers.
- Evidence of mid-tier hedge funds (not just frontier trading firms) making comparable multi-provider arrangements.

---

## 2. Evidence Matrix

### 2.1 Jane Street

| Attribute | Evidence | Source | Date | Confidence |
|-----------|----------|--------|------|------------|
| **Business category** | Quantitative trading firm and market maker | Wikipedia; public record | Ongoing | Confirmed public fact |
| **Owned data centre** | Texas data centre shown in Dwarkesh Patel video tour; described as custom-designed | Jane Street YouTube channel, video ID 8J-GUnfSqeE | Published 15 May 2026 | Confirmed public fact |
| **Historical compute evolution** | "Twenty years ago, our cluster was just 6 Dells stacked on the floor of our office" | Jane Street YouTube description | 15 May 2026 | Confirmed public fact (company's own statement) |
| **CoreWeave commitment: $7B total** | $6B for AI cloud services + $1B equity investment in CoreWeave | CoreWeave press page; multiple YouTube channels (WealthWise, The Startup Club by Slidebean) reporting the deal | April 2026 (announcement); videos dated 16--17 Apr 2026 | Supplier claim / credibly reported but specific dollar confirmation from Jane Street not located |
| **CoreWeave equity investment** | Jane Street participated in CoreWeave's November 2024 secondary share sale | Wikipedia (CoreWeave article) citing public sources | November 2024 | Confirmed public fact |
| **Crusoe commitment: reported $13B** | YouTube video title: "Why Jane Street Bet $13 Billion on Crusoe Energy" (Janmuse channel) and DC TV channel: "Blackstone, Nvidia and Jane Street Just Backed One Builder" | YouTube videos, IDs _VRXhGulLps (3 Sep 2026) and akokwnTkAHI (10 Aug 2026) | Aug--Sep 2026 | Credibly reported but unconfirmed as of 25 September 2026. Neither Jane Street nor Crusoe has published a confirming press release accessible to this research. |
| **Internal GPU allocation system** | "Hivebucks" --- an internal currency for bidding on GPU time; no fixed compute allocations; researchers bid for capacity | YouTube Short from Builder's Cut channel, video ID SkHikBZ9t9U | 21 May 2026 | Customer statement (from Jane Street's own video appearances) |
| **GPU performance engineering** | Published talk: "Making GPUs Actually Fast: A Deep Dive into Training Performance" | Jane Street YouTube channel, video ID pHqcHzxx6I8 | 11 Nov 2025 | Confirmed public fact |
| **ML research activity** | Multiple blog posts on ML: sequence weighting at scale, positional encodings, neural network reverse engineering | blog.janestreet.com | Sep 2026, Apr 2026, Feb 2026 | Confirmed public fact |
| **Scale** | ~3,000 employees; Q2 2025 net trading revenue $10.1B, net profit $6.9B | Wikipedia citing public filings | 2025 | Confirmed public fact |
| **Multi-source confirmed** | Own data centre + CoreWeave + reported Crusoe = at least two confirmed external sources + owned capacity | Composite | 2024--2026 | High confidence for CoreWeave + owned; moderate for Crusoe |
| **Internal workload platform** | Hivebucks allocation system exists; full platform architecture not disclosed | YouTube Short | May 2026 | Partial --- allocation is confirmed; broader platform undisclosed |
| **Data governance** | "Data protection concerns are keeping some of the world's biggest quant trading firms off the public cloud" --- video mentioning Jane Street and HRT | YouTube, "A Global Tech Podcast," video ID P3JKzPrweAw | 25 Aug 2026 | Credibly reported (podcast with apparent industry knowledge) |

### 2.2 Hudson River Trading (HRT)

| Attribute | Evidence | Source | Date | Confidence |
|-----------|----------|--------|------|------------|
| **Business category** | Quantitative trading firm and market maker | Public record | Ongoing | Confirmed public fact |
| **Owned data centre** | "Building AI Infrastructure Inside a Mountain" --- HRT published video showing its own facility | HRT YouTube channel, video ID kWPl7Awtq5U | 13 Mar 2026 | Confirmed public fact |
| **Google Cloud partnership** | "Hudson River Trading: Powering cutting-edge quantitative research models with Google Cloud" --- official Google Cloud customer video about Hyperdisk / block storage | Google Cloud YouTube channel, video ID U1NbkumODpg | 13 May 2025 | Customer statement in supplier material |
| **CoreWeave deal** | "CoreWeave announced a multi-year, multi-billion dollar agreement with Hudson River Trading" | YouTube, "A Global Tech Podcast," video ID 7cNbGpuQP5I; QF-Learn Shorts video ID IEM0VGgCOK0 | Announcement reported 20 Aug 2026 | Credibly reported; CoreWeave press page references an unnamed "leading quantitative trading firm" in a "multi-billion dollar deal to accelerate AI-driven trading" but does not name HRT explicitly |
| **Lambda relationship** | Research brief states HRT has announced Lambda relationships; Lambda blog published HFT data series (Part 2, 17 Aug 2026) describing conversations with HFT firms | lambda.ai/blog | Aug 2026 | Inference. Lambda blog discusses HFT workloads but does not name HRT. Relationship asserted in research brief but not independently confirmed via public press release. |
| **Custom distributed filesystem** | "Blobby" --- custom-built distributed filesystem for scalable research; hundreds of petabytes; NVMe and HDD clusters; FoundationDB for metadata; erasure coding | HRT blog: hudsonrivertrading.com/hrtbeat/building-a-distributed-filesystem-for-scalable-research/ | Publication date not specified; retrieved Sep 2026 | Confirmed public fact (first-party engineering blog) |
| **AI Labs** | Intern spotlight on HRT AI Labs project involving RL for trade execution | HRT blog | 2026 | Confirmed public fact |
| **Multi-source confirmed** | Own data centre + Google Cloud + reported CoreWeave = at least two confirmed sources + owned | Composite | 2025--2026 | High confidence |
| **Bloomberg coverage** | "Inside Hudson River Trading's Blistering Token Burn" --- Bloomberg Odd Lots episode at live show | Bloomberg Podcasts YouTube, video ID py9jbwsbLrU | 5 Jun 2026 | Confirmed public fact (Bloomberg production) |

### 2.3 IMC (International Markets Corporation)

| Attribute | Evidence | Source | Date | Confidence |
|-----------|----------|--------|------|------------|
| **Business category** | Quantitative trading firm and market maker | Public record | Ongoing | Confirmed public fact |
| **CoreWeave deployment** | "IMC agreed to deploy CoreWeave's AI cloud platform to power next-generation research infrastructure capabilities" | CoreWeave press page | Date not precisely identified; likely 2025--2026 | Customer statement in supplier material |
| **Multi-source status** | Only CoreWeave disclosed | --- | --- | Unknown whether IMC uses additional sources |

### 2.4 Flow Traders

| Attribute | Evidence | Source | Date | Confidence |
|-----------|----------|--------|------|------------|
| **Business category** | Quantitative trading firm and market maker | Public record | Ongoing | Confirmed public fact |
| **CoreWeave relationship** | Asserted in research brief; no independent confirmation found in CoreWeave press page or other sources during this research | --- | --- | Unknown. Not independently confirmed as of this research. The CoreWeave press page did not mention Flow Traders by name. |

### 2.5 Point72

| Attribute | Evidence | Source | Date | Confidence |
|-----------|----------|--------|------|------------|
| **Business category** | Multi-manager hedge fund (Steve Cohen) | Public record | Ongoing | Confirmed public fact |
| **SkyPilot customer** | Listed as a named customer on skypilot.ai alongside NVIDIA, Meta, Nubank, and others | skypilot.ai | Retrieved Sep 2026 | Customer statement in supplier material |
| **ML infrastructure work** | Advertised roles involving GPU compute, Kubernetes, and Ray (per research brief) | Research brief assertion; not independently verified via accessible job board during this research | --- | Credibly reported but not independently confirmed |
| **AI fund activities** | Point72's AI fund manager appeared at Global Alts Miami 2026 panel | YouTube, iConnections channel | 3 Mar 2026 | Confirmed public fact |
| **Multi-source status** | Unknown. SkyPilot use implies multi-cluster management capability but does not confirm multiple GPU sources. | --- | --- | Inference |

### 2.6 Shopify (Non-Financial Architectural Comparison)

| Attribute | Evidence | Source | Date | Confidence |
|-----------|----------|--------|------|------------|
| **Business category** | E-commerce technology company (not financial services) | Public record | Ongoing | Confirmed public fact |
| **Multi-cloud GPU architecture** | Detailed engineering blog describing SkyPilot deployment across Nebius (H200 + InfiniBand) and GCP (L4 + CPU) | shopify.engineering/skypilot | Published 26 Jan 2026; HN submission 28 Jan 2026 | Confirmed public fact (first-party engineering blog) |
| **Custom routing** | SkyPilot plugin routes H200 requests to Nebius, L4/CPU to GCP; explicit provider selection honoured | Same source | Jan 2026 | Confirmed public fact |
| **Cost attribution** | Mandatory showback_cost_owner_ref label; Kueue integration for quota-based fair-share scheduling | Same source | Jan 2026 | Confirmed public fact |
| **Priority system** | Four-tier: emergency, interactive, automated-low-priority, lowest; preemption-based | Same source | Jan 2026 | Confirmed public fact |
| **Storage** | 200TB to 2PB, 80 GiB/s read bandwidth, 7-day auto-cleanup | Same source | Jan 2026 | Confirmed public fact |
| **Design philosophy** | "Engineers stay close to the metal" --- declarative YAML, escape hatches, no opaque UI | Same source | Jan 2026 | Confirmed public fact |

---

## 3. Technical Map: Compute and Research Platform Layers

The following describes the general architecture of a multi-source AI compute environment. **Only Shopify has disclosed this architecture in detail.** For quantitative trading firms, most layers are inferred from partial evidence. Disclosed implementations are marked separately from inferences.

### Layer 1: Physical Infrastructure (GPU, Network, Storage)

**Owner: Provider or customer**

- NVIDIA GPUs: H100, H200, B200/GB200 (Blackwell), B300 (Blackwell Ultra)
- InfiniBand or high-bandwidth Ethernet interconnect for multi-node training
- High-performance storage: NVMe local, parallel filesystems (Lustre, GPFS), object storage

**Observed implementations:**
- Jane Street: owns Texas data centre with GPUs (confirmed, video tour May 2026)
- HRT: owns data centre "inside a mountain" (confirmed, video Mar 2026)
- HRT: Blobby custom distributed filesystem (confirmed, engineering blog)
- CoreWeave: 250,000+ GPUs across 32 facilities (confirmed, Wikipedia/public filings)
- Nebius: H200 clusters with InfiniBand (confirmed, Shopify blog)
- Crusoe: approaching 5 GW contracted AI infrastructure capacity (confirmed, Crusoe newsroom Jun 2026)

### Layer 2: Provider Cloud Services (Managed Kubernetes, Slurm, APIs)

**Owner: Provider**

- CoreWeave: Kubernetes-native GPU cloud with Mission Control operating standard
- AWS: SageMaker HyperPod (managed GPU clusters with Slurm and EKS support, up to 95% training goodput, sub-2-minute fault recovery)
- Google Cloud: GKE with GPU support; Hyperdisk for high-throughput storage
- Nebius: AI Cloud with managed inference, fine-tuning services
- Crusoe: Serverless fine-tuning and inference deployments (launched Jul 2026)
- Lambda: GPU cloud with on-demand and reserved capacity

**Observed implementations:**
- HRT uses Google Cloud Hyperdisk (confirmed, Google Cloud customer video May 2025)
- Shopify uses Nebius managed Kubernetes (confirmed, engineering blog Jan 2026)
- CoreWeave serves Jane Street and IMC (confirmed from CoreWeave press page)

### Layer 3: Workload Queueing, Quota, Admission, and Placement

**Owner: Shared (provider infrastructure + customer policy)**

Key tools:
- **Kueue** (Kubernetes-native): quota management, fair-share scheduling, priority-based preemption, topology-aware placement, multi-cluster distribution. Integrates natively with KubeRay, Kubeflow Trainer, and standard Kubernetes jobs.
- **KAI Scheduler**: alternative GPU-aware scheduler for Kubernetes
- **Slurm**: traditional HPC scheduler, still widely used; SageMaker HyperPod supports both Slurm and EKS on same cluster
- **Provider-specific schedulers**: CoreWeave Mission Control, AWS HyperPod Task Governance

**Observed implementations:**
- Shopify uses Kueue for quota-based allocation with fair-share scheduling (confirmed)
- Jane Street uses Hivebucks internal currency system for GPU allocation (confirmed --- a custom approach, not a standard tool)
- AWS HyperPod uses Task Governance for automated prioritisation (confirmed, AWS documentation)

**These tools are NOT interchangeable.** Kueue is an admission controller that operates before the Kubernetes scheduler. Ray is a distributed compute framework. KubeRay is an operator that deploys Ray on Kubernetes. SkyPilot operates above all of these to route jobs across clusters and clouds. A firm using SkyPilot might use Kueue within each cluster and Ray for distributed compute within a job.

### Layer 4: Distributed Applications and Runtimes

**Owner: Customer (application code) running on provider infrastructure**

- **Ray**: distributed Python framework for ML training, serving, data processing, and RL. Supports tasks, actors, and objects. Ray Train for distributed training; Ray Serve for inference; RLlib for reinforcement learning.
- **KubeRay**: Kubernetes operator for deploying and managing Ray clusters. Enables gang scheduling and lifecycle management.
- **PyTorch Distributed**: native distributed training with NCCL backend
- **DeepSpeed**: Microsoft's distributed training library
- **vLLM / SGLang**: high-throughput inference engines

**Observed implementations:**
- Point72 has advertised ML infrastructure roles involving Ray (asserted in research brief)
- HRT AI Labs uses RL algorithms (SAC, PPO) for trade execution (confirmed, intern spotlight blog)
- No quantitative trading firm has publicly confirmed Ray or KubeRay usage

### Layer 5: Cross-Cluster / Cross-Provider Workload Control

**Owner: Customer**

- **SkyPilot**: the most visible tool in this layer. Turns fragmented compute (Kubernetes clusters, Slurm systems, VMs across 20+ providers) into a unified interface. Supports AWS, GCP, Azure, CoreWeave, Nebius, Lambda, and others. Handles job routing, failover, cost optimisation, autostop, and spot instance management. $20M seed funding announced. Commercial SkyPilot Platform adds RBAC, SSO, SOC 2, private VPC.
- **Alternatives**: custom internal platforms; Anyscale (commercial Ray); provider-specific tools (AWS HyperPod)

**Observed implementations:**
- Shopify uses SkyPilot across Nebius and GCP with custom routing plugin (confirmed, engineering blog)
- Point72 is listed as SkyPilot customer (confirmed, skypilot.ai)
- AWS published SkyPilot integration for SageMaker HyperPod (asserted in research brief; specific blog URL not located)
- Jane Street and HRT have NOT disclosed using SkyPilot or any named cross-provider orchestration tool

### Layer 6: Identity, Security, Cost, Observability, Audit

**Owner: Customer (policy) + Provider (enforcement infrastructure)**

- Identity and access management (RBAC, SSO, workspace segmentation)
- Secrets management
- Cost attribution and chargeback
- Observability (GPU utilisation, job metrics, cluster health)
- Audit trails for regulatory compliance

**Observed implementations:**
- Shopify: mandatory cost attribution labels, team-level dashboards (confirmed)
- Jane Street: Hivebucks provides internal cost allocation mechanism (confirmed)
- CoreWeave: SkyPilot Platform offers SOC 2 Type II certification (confirmed)
- Quant firms keeping data on own premises due to data protection concerns (reported, Aug 2026 podcast)

### Layer 7: Experiment Tracking, Reproducibility, Model Delivery

**Owner: Customer**

- Experiment tracking: Weights & Biases (acquired by CoreWeave Mar 2025 for ~$1.7B), MLflow, Neptune
- Model registry and versioning
- Evaluation frameworks
- Production model serving and monitoring

**Observed implementations:**
- CoreWeave/W&B blog explicitly targets quant firms (confirmed)
- No quant firm has disclosed its experiment tracking or reproducibility infrastructure

### How a Researcher's Job Passes Through These Layers

1. Researcher defines job requirements (GPU type, count, priority) in YAML or code
2. Cross-provider controller (Layer 5) selects target cluster based on availability, cost, and priority
3. Cluster admission controller (Layer 3) checks quota, applies fair-share rules, and places the job
4. Distributed runtime (Layer 4) launches workers across allocated GPUs
5. Job reads training data from storage (Layer 1), connected via provider networking (Layer 2)
6. Metrics flow to observability and cost attribution systems (Layer 6)
7. Results are recorded in experiment tracker; model artefacts stored in registry (Layer 7)

**State is held at multiple layers:** data in storage (Layer 1), checkpoints in provider storage or cross-provider storage, experiment metadata in tracking tools (Layer 7), cost records in attribution systems (Layer 6). This is a fundamental challenge for portability: a job can be launched anywhere, but its data, checkpoints, and audit trail may not move easily.

---

## 4. The Invisible Roadmap: Adoption Sequence

Based on the evidence, the following progression appears to be occurring. Firms at different stages are identified where possible.

### Stage 1: Isolated Research Experiments
A small ML team runs experiments on a single cloud provider or a handful of purchased GPUs. No dedicated infrastructure team. No internal platform.

**Evidence:** Most hedge funds and asset managers are at or before this stage. No public evidence places the majority of firms beyond isolated experiments.

### Stage 2: Growing Demand and Dedicated GPU Capacity
ML workloads grow. The firm secures dedicated GPU capacity --- either reserved cloud instances or owned hardware. A small infrastructure team emerges.

**Evidence:** HRT's data centre video (Mar 2026) describes a progression from smaller setups to dedicated infrastructure. Jane Street's Texas data centre represents a significant owned-capacity investment.

### Stage 3: Additional Suppliers or Owned Capacity
Demand exceeds single-source supply. The firm adds a second or third source: a specialist GPU cloud alongside a hyperscaler, or owned capacity alongside cloud.

**Evidence:**
- Jane Street: owned DC + CoreWeave + reported Crusoe (confirmed at Stage 3+)
- HRT: owned DC + Google Cloud + reported CoreWeave (confirmed at Stage 3+)
- IMC: CoreWeave confirmed; other sources unknown

### Stage 4: Fragmented Access, Data, and Job Workflows
Multiple sources create operational friction: different APIs, different authentication, different storage, different monitoring. Researchers waste time navigating environments rather than running experiments.

**Evidence:** This stage is inferred but not directly described by any quantitative trading firm. The Shopify engineering blog implicitly describes this pain point: their SkyPilot deployment was motivated by the need to unify access across providers. The podcast noting quant firms keep data on premises (Aug 2026) suggests data gravity is a real constraint.

### Stage 5: A Common Workload and Governance Layer
The firm builds or deploys an internal platform that provides unified job submission, scheduling, cost attribution, and governance across all capacity sources.

**Evidence:**
- Shopify: confirmed at Stage 5 (SkyPilot + Kueue + custom routing, Jan 2026)
- Point72: SkyPilot customer (suggests Stage 5 intent, but no published architecture)
- Jane Street: Hivebucks system is an internal governance mechanism, but no evidence of cross-provider orchestration published
- HRT: Blobby filesystem solves the storage unification problem, but no cross-provider workload layer disclosed

### Stage 6: A Repeatable Research Loop
Experiments, evaluation, and feedback form a systematic loop. The platform enables reproducibility, automated evaluation, and rapid iteration. The firm learns faster because infrastructure no longer constrains the research cycle.

**Evidence:** No quantitative trading firm has publicly described operating at Stage 6. The hypothesis that faster infrastructure produces faster learning is plausible but unverified in public evidence. CoreWeave/W&B marketing claims "compute speed is the new alpha," but this is a supplier claim without supporting evidence from customers.

### Which Firms May Never Need Stages 5--6?

Firms with smaller ML teams, less GPU-intensive workloads (e.g., NLP for research notes, coding assistants, summarisation), or sufficient capacity from a single provider have no reason to build a multi-provider platform. The cost and complexity of Stages 5--6 only make sense when:
- GPU demand regularly exceeds single-source supply
- Multiple GPU types or networking configurations are needed
- The firm has enough ML researchers to justify platform engineering investment
- The competitive advantage depends on research velocity

Most discretionary hedge funds, macro funds, and smaller systematic firms are unlikely to reach Stage 5.

---

## 5. Strategic Comparison of Providers

### CoreWeave

**What it is:** The largest specialist GPU cloud provider. Kubernetes-native. Purpose-built for AI workloads.

**Scale:** 250,000+ GPUs, 32 facilities, ~$100B revenue backlog (Q1 2026). Revenue: $5.13B (2025), $2.6B (Q2 2026 alone, up 112% YoY). Publicly traded (CRWV, March 2025 IPO).

**Differentiation:**
- First cloud provider to deploy GB200 NVL72 (Feb 2025) and Blackwell Ultra (Jul 2025)
- Platinum ClusterMAX rating from SemiAnalysis (three consecutive times)
- 96% goodput vs. industry average 90%; 50% fewer daily training interruptions
- Acquired Weights & Biases (~$1.7B, Mar 2025) --- integrates experiment tracking with compute
- Mission Control operating standard

**Financial services traction:**
- Jane Street: $6B cloud + $1B equity (reported Apr 2026)
- IMC: deployment announced
- Unnamed "leading quantitative trading firm" in multi-billion deal (likely HRT, Aug 2026)

**Risk:** $35.1B total debt (Q2 2026). Revenue concentrated: Microsoft was 60%+ of 2024 revenue. Long-term contracts with hyperscalers secure revenue but create debt dependency.

### Crusoe Energy Systems

**What it is:** Vertically integrated AI cloud. Builds its own data centres, sources its own energy, manufactures infrastructure components.

**Scale:** Approaching 5 GW contracted capacity (Jun 2026). $3.9B Series F at $30.9B valuation (Sep 2026). Tulsa manufacturing facility.

**Differentiation:**
- Energy-first approach: originally powered by stranded natural gas, now expanding to nuclear (Aalo Atomics partnership), renewables, and grid power
- Vertical integration: energy + data centre construction + manufacturing + cloud platform
- Spark modular AI data centres (announced Apr 2026)
- NVIDIA Exemplar Cloud validation on Blackwell Ultra (Sep 2026)
- MLPerf results published (Sep 2026)

**Financial services traction:**
- Jane Street reported as $13B commitment (YouTube commentary, Sep 2026; unconfirmed by either party)
- DC TV and Janmuse channels report Blackstone, NVIDIA, and Jane Street backing
- No other financial services customers identified

**Risk:** Reported $13B figure not independently verified. The Compute Bill channel noted discrepancy between Crusoe's $3.9B Series F announcement and its SEC Form D filing showing $3.1B (Sep 2026). Earlier pivot from crypto mining raises questions about business model stability.

### Nebius

**What it is:** AI cloud platform spun out from Yandex. One of Europe's largest GPU capacity providers.

**Scale:** H200 GPU clusters with InfiniBand. Data centres across multiple European locations. Meta announced up to $27B in Nebius AI infrastructure (reported Mar 2026).

**Differentiation:**
- Strong InfiniBand networking for distributed training
- SkyPilot integration as routing target
- Token Factory for managed inference
- Competitive pricing vs. US hyperscalers for European workloads

**Financial services traction:**
- Revolut: 200+ H100 GPUs for fraud detection, AML, and foundational model training (confirmed customer story)
- Shopify: H200 clusters for ML training (confirmed engineering blog)
- No quantitative trading firm customers identified

### Lambda

**What it is:** GPU cloud provider focused on AI research. Originally known for GPU workstations.

**Scale:** Rebranded from Lambda Labs to Lambda (lambda.ai). Cloud, on-premises, and GPU clusters.

**Differentiation:**
- Researcher-friendly; strong brand in ML community
- Published HFT data research series (Aug 2026) suggesting engagement with financial services
- On-demand and reserved capacity

**Financial services traction:**
- HRT relationship asserted in research brief but not independently confirmed via public press release
- Lambda blog discusses HFT workloads without naming customers (Aug 2026)

**Risk:** Smaller than CoreWeave. Financial services traction is thin and unverifiable.

### Nscale

**What it is:** European neocloud provider. Ranked #1 neocloud by ABI Research (Mar 2026).

**Scale:** $155M Series A (Dec 2024). Partnership with OpenAI/Aker ASA for Stargate Norway (230 MW). Data centres in Norway, UK, Iceland, Portugal, US. NVIDIA Exemplar Cloud on GB300 NVL72 (Jul 2026).

**Differentiation:**
- European data sovereignty
- Renewable energy (Norwegian hydropower)
- Serverless inference and fine-tuning services

**Financial services traction:** None identified.

### AWS (SageMaker HyperPod)

**What it is:** Managed GPU cluster service supporting both Slurm and EKS orchestration.

**Differentiation:**
- Up to 95% training goodput on clusters with thousands of accelerators
- Sub-2-minute fault recovery without checkpoint reload
- Task Governance with automated prioritisation and compute lending/borrowing
- Ray integration at production scale
- Trainium custom silicon (up to 40% better price-performance vs. comparable GPUs)
- Built-in Grafana dashboards, MLflow integration
- Named customers: Perplexity, Stability AI, Articul8, Luma AI

**Financial services traction:** No trading firms or hedge funds named. Thomson Reuters listed as customer.

**Relevance to thesis:** AWS is not losing the AI compute market. It is investing heavily. But the thesis is not that firms are leaving AWS --- it is that firms want to control workload placement across multiple sources, including AWS. SkyPilot integration with AWS (asserted in research brief) would support this interpretation.

### Google Cloud

**What it is:** Major hyperscaler with strong AI/ML services.

**Financial services traction:** HRT is a confirmed Google Cloud customer for Hyperdisk storage (Google Cloud YouTube, May 2025).

### Azure

**What it is:** Microsoft's cloud platform with strong GPU offerings.

**Financial services traction:** No specific quantitative trading firm customers identified for AI compute.

### Owned Capacity

**What it provides:** Full control over hardware selection, network topology, data residency, and physical security. No per-hour compute costs after initial investment.

**Who is building it:**
- Jane Street: Texas data centre (confirmed, May 2026)
- HRT: Data centre "inside a mountain" (confirmed, Mar 2026)

**Trade-offs:** Massive capital expenditure. Slow to scale. Requires specialised facilities engineering. But provides the strongest guarantees on data sovereignty, network performance, and availability.

---

## 6. Five Leading Indicators to Monitor

### 1. Job postings for GPU platform / ML infrastructure engineers at quantitative firms

**What to watch:** Point72, Citadel, Two Sigma, Millennium, Balyasny, D.E. Shaw, and others advertising roles involving Kubernetes, Ray, KubeRay, GPU scheduling, or multi-cloud orchestration.

**Where to look:** careers.point72.com, LinkedIn, Greenhouse/Lever job boards. Look specifically for "platform," "infrastructure," and "GPU" in ML engineering roles at hedge funds.

**Why it matters:** Hiring is the most reliable leading indicator of infrastructure investment. Firms do not hire GPU platform engineers unless they are building or operating significant GPU infrastructure.

### 2. CoreWeave and Crusoe SEC filings disclosing financial services revenue

**What to watch:** CoreWeave 10-K and 10-Q filings for customer concentration data. Any shift from Microsoft dominance (60%+ of 2024 revenue) toward a diversified customer base that includes financial services. Crusoe SEC filings after Series F.

**Where to look:** SEC EDGAR (CIK 0001769628 for CoreWeave).

**Why it matters:** If quantitative firms become material revenue customers of specialist GPU clouds, it will appear in financial disclosures.

### 3. Engineering blogs from quantitative firms describing internal ML platforms

**What to watch:** Posts on blog.janestreet.com and hudsonrivertrading.com/hrtbeat describing workload orchestration, multi-cluster management, or cross-provider GPU infrastructure. Also watch for conference talks (KubeCon, Ray Summit, NeurIPS, ICML systems workshops).

**Why it matters:** The Shopify SkyPilot blog (Jan 2026) was the first detailed public account of a non-AI-lab building a multi-provider research platform. A comparable post from a quantitative firm would significantly strengthen the thesis.

### 4. SkyPilot customer list and enterprise adoption announcements

**What to watch:** New financial services names appearing on skypilot.ai or in SkyPilot blog posts. Point72 is already listed. Watch for others.

**Where to look:** skypilot.ai, GitHub releases, blog posts, conference presentations.

**Why it matters:** SkyPilot is the most visible cross-provider orchestration tool. Its customer list is a proxy for multi-provider platform adoption.

### 5. Specialist GPU cloud provider announcements naming financial services customers

**What to watch:** CoreWeave, Crusoe, Nebius, Lambda, and Nscale press releases and blog posts naming quantitative firms, hedge funds, or banks as customers. Distinguish between investment relationships and compute-consumption relationships.

**Where to look:** Provider press pages, blog posts, and earnings call transcripts.

**Why it matters:** Provider announcements are the most accessible source of customer relationship information, though they must be treated as interested sources.

---

## 7. Counterarguments and Falsification Tests

### Counterargument 1: Specialist GPU clouds are temporary overflow capacity

**Argument:** Firms sign multi-year deals with CoreWeave or Crusoe because hyperscalers cannot deliver enough GPUs fast enough. Once AWS, GCP, and Azure catch up on GPU availability, these contracts will not be renewed.

**Evidence for:** AWS HyperPod delivers 95% goodput and sub-2-minute recovery. Google is investing heavily in TPUs and GPU clusters. Azure is expanding with NVIDIA. Hyperscalers have deeper pockets and broader service offerings.

**Evidence against:** CoreWeave's $100B revenue backlog (Q1 2026) and Crusoe's 5 GW contracted capacity suggest customers are making long-term commitments, not spot purchases. The specialist clouds offer purpose-built infrastructure (higher goodput, lower interruption rates) that hyperscalers may not prioritise for all workloads.

**Falsification test:** Monitor renewal rates of multi-year contracts. If firms consolidate back to hyperscalers after initial CoreWeave/Crusoe contracts expire (2028--2029), the thesis weakens.

### Counterargument 2: Hyperscalers will close the performance gap

**Argument:** AWS, GCP, and Azure are investing billions in AI infrastructure. Their managed services (SageMaker HyperPod, GKE with GPU support, Azure ML) will become good enough that building a custom multi-provider platform provides no marginal benefit.

**Evidence for:** SageMaker HyperPod's feature set is genuinely strong: Task Governance, Trainium support, Ray integration, checkpointless training. The hyperscaler model of bundling compute + storage + networking + managed services is compelling.

**Evidence against:** Hyperscaler managed platforms optimise for their own ecosystem. A firm wanting to use CoreWeave H200s alongside AWS Trainium alongside its own data centre cannot rely on SageMaker alone.

**Falsification test:** If a major quantitative firm publicly describes running its entire ML workload on a single hyperscaler's managed platform, the multi-provider thesis weakens.

### Counterargument 3: The largest firms will own rather than rent

**Argument:** Jane Street and HRT are building their own data centres. At sufficient scale, ownership is cheaper and more controllable than renting. They may reduce cloud dependence over time.

**Evidence for:** Jane Street's Texas data centre. HRT's mountain facility. Both firms have the capital ($10.1B in Q2 2025 revenue for Jane Street alone). Blobby's design explicitly cites cost of third-party storage appliances as a motivation for building in-house.

**Evidence against:** Even with owned capacity, firms still sign multi-billion cloud deals (Jane Street: $6B CoreWeave, reported $13B Crusoe). This suggests ownership and renting are complements, not substitutes. GPU technology moves fast enough that buying all capacity creates obsolescence risk.

**Falsification test:** If Jane Street or HRT stop signing new cloud deals and expand owned capacity instead, the multi-provider thesis narrows to "portfolio of owned assets" rather than "portfolio of owned and rented."

### Counterargument 4: Data gravity makes cross-provider portability impractical

**Argument:** Quantitative firms hold vast proprietary datasets (HRT describes hundreds of petabytes). Moving data between providers is slow, expensive, and creates security risks. In practice, workloads stay where the data is.

**Evidence for:** The August 2026 podcast explicitly states data protection concerns keep quant firms off the public cloud. HRT built Blobby to control its own storage. Shopify's architecture explicitly notes "training datasets live in storage we own, replicated across clouds" --- acknowledging the data gravity problem and solving it via replication.

**Evidence against:** Shopify solved this with replication. High-bandwidth interconnects and object storage services reduce data movement friction. Not all workloads need the full dataset --- some can work with subsets or cached data.

**Falsification test:** If firms describe significant difficulty moving data between providers, or if most GPU-intensive work stays coupled to a single storage location, the portability assumption weakens.

### Counterargument 5: The pattern is confined to a few exceptional firms

**Argument:** Jane Street and HRT are among the most profitable and technically sophisticated firms in finance. Their behaviour is not representative of the broader hedge fund industry.

**Evidence for:** This is the strongest counterargument. Public evidence names perhaps five to seven firms. Jane Street had $6.9B in net profit in Q2 2025 alone. Most hedge funds operate at a tiny fraction of this scale. The engineering investment required for a multi-provider platform is enormous.

**Evidence against:** Point72 (a multi-manager hedge fund, not a market maker) is a SkyPilot customer. Revolut (a fintech, not a trading firm) uses Nebius at scale. The tools (SkyPilot, Kueue, Ray) are becoming more accessible. As GPU workloads grow across the industry, the need for multi-source management may spread.

**Falsification test:** If no additional firms beyond Jane Street, HRT, IMC, and Point72 make disclosed multi-provider arrangements in the next 12 months, the thesis should be narrowed to "a pattern among elite trading firms" rather than "an emerging industry trend."

### Counterargument 6: Vendor platforms will absorb the integration work

**Argument:** CoreWeave's Mission Control, AWS HyperPod, or SkyPilot Platform will become comprehensive enough that firms do not need to build custom platforms. The "governed research platform" is purchased, not built.

**Evidence for:** SkyPilot Platform offers RBAC, SSO, SOC 2, quota management. SageMaker HyperPod offers Task Governance, integrated monitoring, and multi-framework support. CoreWeave acquired Weights & Biases to integrate experiment tracking.

**Evidence against:** Jane Street built Hivebucks. HRT built Blobby. These firms prefer to own critical infrastructure rather than depend on vendors. Vendor platforms optimise for their own ecosystem and typical customer; frontier firms have atypical requirements.

**Falsification test:** If Point72 or another firm describes running entirely on SkyPilot Platform or SageMaker HyperPod without significant custom work, vendor-managed platforms may be sufficient.

### Counterargument 7: More compute may not improve research outcomes

**Argument:** The implicit assumption that "faster experiments = better trading" is unproven. Quantitative alpha depends on model quality, data quality, and execution --- not just compute throughput. Firms may be overinvesting in GPU capacity relative to the actual bottleneck.

**Evidence for:** No public evidence connects GPU investment to trading returns. The CoreWeave/W&B claim that "compute speed is the new alpha" is marketing, not evidence. Jane Street's $15B loss in July 2026 (attributed partly to an AI-focused hedge fund investment) suggests AI investments can destroy value.

**Evidence against:** More compute enables more experiments. More experiments, if properly evaluated, enable faster learning. This is the mechanism by which compute could improve outcomes --- but only if the experiment-evaluation-feedback loop is working well.

**Falsification test:** If firms reduce GPU investment after a period of heavy spending (a "GPU capex winter"), this would suggest the compute-to-alpha mechanism was weaker than assumed.

---

## 8. Three Potential Essay Angles

### Essay 1: "The GPU Portfolio: How Trading Firms Are Becoming Infrastructure Companies"

**Central claim:** The most profitable quantitative trading firms are assembling diversified portfolios of GPU capacity --- owned data centres, specialist clouds, hyperscalers --- managed through internal platforms. This is not a cloud migration. It is the emergence of a new kind of financial firm that treats compute infrastructure as a strategic asset on par with market data and talent.

**Why it is original:** Most coverage treats the Jane Street / CoreWeave deal as a financial investment story. This essay would argue it is an infrastructure strategy story: these firms are building the compute equivalent of the multi-venue trading infrastructure they already operate.

**Who should care:** CTOs and infrastructure leads at hedge funds and asset managers; GPU cloud providers seeking financial services customers; investors evaluating the specialist GPU cloud market.

**Strongest evidence:**
- Jane Street: own DC + $7B CoreWeave + reported $13B Crusoe = three-source portfolio
- HRT: own DC + Google Cloud + reported CoreWeave = three-source portfolio
- Jane Street's Hivebucks system = internal resource allocation mechanism, analogous to internal market-making
- HRT's Blobby filesystem = custom infrastructure built because third-party solutions were inadequate at scale

**Missing evidence:** No firm has published a complete architecture showing how these sources are unified. The Crusoe deal is unconfirmed. No evidence that other quantitative firms are assembling comparable portfolios.

**Danger of overclaiming:** The essay could easily slide into "all quant firms are becoming AI infrastructure companies" when the evidence covers perhaps five firms. Must be sharply scoped to frontier firms and clearly state the absence of evidence for broader adoption.

### Essay 2: "The Invisible Layer: Why the Real AI Advantage Is Not GPUs but Orchestration"

**Central claim:** GPUs are a commodity that money can buy. The durable advantage lies in the orchestration layer: the internal platform that turns fragmented GPU capacity into a governed, reproducible, fast-iterating research environment. Shopify's SkyPilot architecture is the best public example. Point72's SkyPilot adoption suggests financial services firms are building something similar.

**Why it is original:** Media coverage focuses on GPU deals (billions of dollars, hardware announcements). This essay would shift attention to the software layer that makes GPU capacity useful --- the scheduling, quota management, cost attribution, priority systems, and cross-provider routing that determine whether researchers can actually run experiments efficiently.

**Who should care:** ML platform engineers; CTOs evaluating build-vs-buy for AI infrastructure; SkyPilot, Kueue, and Ray communities; investors assessing the value of the platform layer.

**Strongest evidence:**
- Shopify's SkyPilot blog (Jan 2026) is the most detailed public account of a multi-provider platform
- Point72 listed as SkyPilot customer
- Jane Street's Hivebucks system demonstrates that allocation/governance mechanisms matter
- Kueue provides topology-aware scheduling, fair-share quotas, and multi-cluster distribution
- SkyPilot supports 20+ providers and offers RBAC, SSO, SOC 2 in its commercial platform

**Missing evidence:** No quantitative trading firm has published a comparable architecture. Point72's SkyPilot usage has no published detail. The connection between orchestration quality and research outcomes is theoretical.

**Danger of overclaiming:** Could imply that every firm needs a multi-provider orchestration layer. In reality, most firms would be better served by a single provider with a good managed platform. The essay must be honest about who genuinely needs this complexity.

### Essay 3: "After the GPU Gold Rush: What Quant Firms Will Actually Need"

**Central claim:** The current GPU spending wave (billions of dollars in CoreWeave and Crusoe deals) addresses the capacity bottleneck. But capacity alone does not produce value. The next bottleneck will be researcher productivity: the ability to turn available GPU time into validated, reproducible experiments that improve trading models. The firms that build strong experiment-evaluation-feedback loops will outperform those that simply buy more GPUs.

**Why it is original:** Challenges the implicit narrative that "more GPUs = better AI = better trading." Reframes the question from "how much compute" to "how well can you use it."

**Who should care:** Hedge fund CIOs and CTOs making GPU investment decisions; ML researchers at quantitative firms; AI infrastructure companies designing products for financial services.

**Strongest evidence:**
- CoreWeave/W&B blog positions "compute speed is the new alpha" but provides no customer evidence
- Shopify's architecture shows the full stack from routing to cost attribution to priority management
- SageMaker HyperPod metrics (95% goodput, <2 min recovery) show what "well-managed" looks like
- HRT's Blobby blog demonstrates that storage (not just compute) is a critical bottleneck
- No public evidence connects GPU spending to improved trading returns

**Missing evidence:** No quant firm has published experiment cycle times, GPU utilisation rates, or other metrics that would measure "productive use of compute." The claim that faster experimentation produces better outcomes is reasonable but unproven.

**Danger of overclaiming:** Could imply that firms are wasting money on GPUs. The spending may be entirely rational --- access to capacity is the necessary first step. The essay must frame "researcher productivity" as the next problem, not as evidence that the current spending is misguided.

---

## 9. Dated Source Appendix

### First-Party Engineering Blogs and Company Publications

| # | Source | URL | Publication Date | Event Date | Key Fact |
|---|--------|-----|-----------------|------------|----------|
| 1 | Shopify Engineering: SkyPilot multi-cloud GPU architecture | https://shopify.engineering/skypilot | 26 Jan 2026 | 2025--2026 (implementation) | Detailed architecture of SkyPilot deployment across Nebius (H200) and GCP (L4). Custom routing, Kueue quotas, priority tiers, cost attribution. |
| 2 | HRT Blog: Building a Distributed Filesystem for Scalable Research | https://www.hudsonrivertrading.com/hrtbeat/building-a-distributed-filesystem-for-scalable-research/ | Retrieved Sep 2026 (date not specified) | Ongoing | Blobby: custom distributed filesystem, hundreds of petabytes, FoundationDB metadata, erasure coding, NVMe and HDD clusters. |
| 3 | HRT Blog: Intern Spotlight HRT AI Labs Project 2026 | https://www.hudsonrivertrading.com/hrtbeat/intern-spotlight-hrt-ai-labs-project-2026/ | 2026 | 2026 | RL for trade execution using SAC and PPO algorithms at HRT AI Labs. |
| 4 | Jane Street Blog | https://blog.janestreet.com/ | Various 2024--2026 | --- | ML posts: sequence weighting at scale (Sep 2026), positional encodings (Apr 2026), neural network reverse engineering (Feb 2026). No GPU infrastructure posts. |
| 5 | CoreWeave/W&B: Accelerating Quant Research | https://wf.coreweave.com/blog/accelerating-quant-research-with-coreweave-and-weights-biases | Retrieved Sep 2026 | --- | Names Jane Street. 20% higher MFU, 96% goodput, 50% fewer interruptions, 7 GB/s per GPU storage throughput. |
| 6 | Lambda Blog: HFT Data Series Part 2 | https://lambda.ai/blog/high-frequency-trading-data-part-2 | 17 Aug 2026 | --- | World model for market microstructure. References conversations with HFT firms but names none. |
| 7 | Crusoe Newsroom | https://www.crusoe.ai/newsroom | Various 2026 | --- | $3.9B Series F (17 Sep 2026), 5 GW contracted capacity (9 Jun 2026), nuclear partnership (30 Jul 2026), Perplexity partnership (15 Sep 2026). No financial services customers named. |

### YouTube Videos (First-Party)

| # | Source | URL | Publication Date | Key Fact |
|---|--------|-----|-----------------|----------|
| 8 | Jane Street: Dwarkesh Goes Inside Jane Street's Latest AI Data Center | https://www.youtube.com/watch?v=8J-GUnfSqeE | 15 May 2026 | Tour of custom-designed Texas data centre. "Twenty years ago, our cluster was just 6 Dells." |
| 9 | Jane Street: GPUs, Trading, and Hiring (Dwarkesh conversation) | https://www.youtube.com/watch?v=xKZ_8ULR91Y | 21 May 2026 | Conversation at Jane Street Texas DC about GPUs, trading, and hiring. |
| 10 | Jane Street: Making GPUs Actually Fast | https://www.youtube.com/watch?v=pHqcHzxx6I8 | 11 Nov 2025 | Deep dive into GPU training performance. |
| 11 | Builder's Cut: Jane Street Hivebucks #Shorts | https://www.youtube.com/watch?v=SkHikBZ9t9U | 21 May 2026 | "Jane Street has no fixed compute allocations. Instead, researchers bid for GPU time using an internal currency called Hivebucks." |
| 12 | HRT: Building AI Infrastructure Inside a Mountain | https://www.youtube.com/watch?v=kWPl7Awtq5U | 13 Mar 2026 | HRT data centre tour: "Training modern AI models requires enormous compute power and networking infrastructure." |
| 13 | Google Cloud: HRT Powering Quantitative Research | https://www.youtube.com/watch?v=U1NbkumODpg | 13 May 2025 | "Learn how Hudson River Trading powers cutting-edge quantitative research models with Google Cloud" and Hyperdisk. |
| 14 | Crusoe AI: Inside Crusoe's $3.9B Series F | https://www.youtube.com/watch?v=iYbzJ2EN35I | 17 Sep 2026 | Co-founders discuss Series F at $30.9B valuation. |
| 15 | Crusoe CEO on Bloomberg Television | https://www.youtube.com/watch?v=cH7tiy7s17A | 23 Mar 2026 | Abilene project and growing energy demands of AI infrastructure. |
| 16 | Crusoe CEO on CNBC | https://www.youtube.com/watch?v=YOzWZg7PHPU | 24 Oct 2025 | "Every single customer we talk to is compute-constrained right now." $10B fundraise discussion. |

### YouTube Videos (Third-Party Reporting)

| # | Source | URL | Publication Date | Key Fact |
|---|--------|-----|-----------------|----------|
| 17 | Janmuse: Why Jane Street Bet $13 Billion on Crusoe Energy | https://www.youtube.com/watch?v=_VRXhGulLps | 3 Sep 2026 | Reports Jane Street $13B commitment to Crusoe. Unconfirmed by either party. |
| 18 | DC TV: Blackstone, Nvidia and Jane Street Just Backed One Builder | https://www.youtube.com/watch?v=akokwnTkAHI | 10 Aug 2026 | Data centre daily wrap. Reports Jane Street backing Crusoe. |
| 19 | WealthWise: Wall Street's Top Quant Firm Goes All-In on AI Infrastructure With $6B CoreWeave Deal | https://www.youtube.com/watch?v=hUQJ_fc4sjc | 16 Apr 2026 | Reports $7B total: $6B cloud + $1B equity. |
| 20 | The Startup Club by Slidebean: How CoreWeave Secured $7 Billion in a Single Day | https://www.youtube.com/watch?v=FcHehCA9Jbs | 17 Apr 2026 | Reports $7B from Jane Street. "GPUs are the new financial asset." |
| 21 | A Global Tech Podcast: A hedge fund just signed a multibillion dollar deal with CoreWeave | https://www.youtube.com/watch?v=7cNbGpuQP5I | 24 Aug 2026 | "CoreWeave announced a multi-year, multi-billion dollar agreement with Hudson River Trading." Announcement date reported as 20 Aug 2026. |
| 22 | QF-Learn Shorts: HRT Leverages CoreWeave's GPU Cloud | https://www.youtube.com/watch?v=IEM0VGgCOK0 | 22 Aug 2026 | Reports HRT integrating CoreWeave's GPU cloud for AI research. |
| 23 | A Global Tech Podcast: Why quant funds keep their data on their own premises | https://www.youtube.com/watch?v=P3JKzPrweAw | 25 Aug 2026 | "Data protection concerns are keeping some of the world's biggest quant trading firms off the public cloud. Jane Street and Hudson River Trading..." |
| 24 | Bloomberg Originals: How a Secretive Trading Empire Is Taking Over Wall Street | https://www.youtube.com/watch?v=6LkMI6uvqZY | 1 May 2026 | Bloomberg documentary on HFT transformation. |
| 25 | Bloomberg Podcasts: Inside Hudson River Trading's Blistering Token Burn (Odd Lots) | https://www.youtube.com/watch?v=py9jbwsbLrU | 5 Jun 2026 | Live show follow-up on HRT. |
| 26 | The Compute Bill: Crusoe Announced $3.9 Billion. Its Own SEC Filing Says $3.1 Billion. | https://www.youtube.com/watch?v=XcfwUjs2NIU | 21 Sep 2026 | Discrepancy between Crusoe announcement and SEC Form D filing. |

### Provider and Technology Documentation

| # | Source | URL | Retrieved | Key Fact |
|---|--------|-----|-----------|----------|
| 27 | CoreWeave Press Page | https://www.coreweave.com/press | Sep 2026 | Jane Street: $6B cloud + $1B equity. IMC deployment. Unnamed quant firm multi-billion deal. |
| 28 | CoreWeave Wikipedia | https://en.wikipedia.org/wiki/CoreWeave | Sep 2026 | Full funding history, customer list, financials. Microsoft 60%+ of 2024 revenue. $35.1B debt. $100B backlog. |
| 29 | SkyPilot Website | https://skypilot.ai/ | Sep 2026 | Supports 20+ providers. Named customers include Point 72, NVIDIA, Meta, Nubank. $20M seed funding. SOC 2 Type II. |
| 30 | SkyPilot GitHub | https://github.com/skypilot-org/skypilot | Sep 2026 | Open-source. 10.7k stars. Supports AWS, GCP, Azure, CoreWeave, Nebius, Lambda, and others. |
| 31 | Kueue Documentation | https://kueue.sigs.k8s.io/ | Sep 2026 | Kubernetes-native job queueing. Quota management, topology-aware scheduling, multi-cluster distribution. Integrates with KubeRay. |
| 32 | Ray Website | https://www.ray.io/ | Sep 2026 | Distributed AI compute engine. Tasks, actors, objects. Ray Train, Ray Serve, RLlib. 1M+ CPU core deployments reported. |
| 33 | AWS SageMaker HyperPod | https://aws.amazon.com/sagemaker/hyperpod/ | Sep 2026 | 95% goodput, <2 min recovery, Task Governance, Slurm + EKS, Ray integration, Trainium support. Customers: Perplexity, Stability AI, Thomson Reuters. |
| 34 | Nebius Customer Stories | https://nebius.com/customer-stories | Sep 2026 | Revolut (200+ H100s, fraud/AML), Jua (weather AI for energy trading), Recraft (B200), Prima Mente, RoboForce. |
| 35 | Nscale Blog | https://nscale.com/blog | Sep 2026 | $155M Series A. #1 neocloud (ABI Research). Stargate Norway with OpenAI. NVIDIA Exemplar Cloud on GB300 NVL72. |
| 36 | Jane Street Wikipedia | https://en.wikipedia.org/wiki/Jane_Street_Capital | Sep 2026 | ~3,000 employees. Q2 2025: $10.1B revenue, $6.9B profit. OCaml + Python. ~$15B loss Jul 2026 (partly AI hedge fund). |
| 37 | Stoa Markets | https://www.stoaexchange.com | Sep 2026 | YC S26. GPU marketplace. Price discovery, verified counterparties, settlement tracking. |

### Hacker News Discussions

| # | Source | URL | Date | Key Fact |
|---|--------|-----|------|----------|
| 38 | HN: Jane Street Designed Its New Data Center [video] | https://news.ycombinator.com/item?id=48164282 | 16 May 2026 | 10 points. Links to Dwarkesh tour video. |
| 39 | HN: SkyPilot at Shopify: Multi-cloud GPUs without the pain | https://news.ycombinator.com/item?id=46794949 | 28 Jan 2026 | Links to shopify.engineering/skypilot. |
| 40 | HN: Launch HN: Stoa Markets (YC S26) -- A Marketplace for GPUs and AI Servers | https://news.ycombinator.com/item?id=49246057 | 10 Aug 2026 | 77 points, 51 comments. GPU marketplace launch. |
| 41 | HN: Launch HN: Chamber (YC W26) -- An AI Teammate for GPU Infrastructure | https://news.ycombinator.com/item?id= (Chamber, 16 Mar 2026) | 16 Mar 2026 | 26 points. Indicates growing market for GPU infrastructure management tooling. |

### Conference Presentations and Talks

| # | Source | URL | Date | Key Fact |
|---|--------|-----|------|----------|
| 42 | Ray Summit 2025: GPU Scheduling for Massive-Scale Ray Workloads (Microsoft) | https://www.youtube.com/watch?v=1cnEPhzVv_c | 1 Dec 2025 | Benchmarking GPU scheduling for Ray workloads. |
| 43 | Ray Summit 2025: KubeRay + vLLM at DatologyAI | https://www.youtube.com/watch?v=DNpWaWb2kLI | 18 Nov 2025 | Trillion-scale synthetic data generation with KubeRay. |
| 44 | Ray Summit 2025: Scaling Ray on Kubernetes (Google) | https://www.youtube.com/watch?v=W65Vzqjidrg | 20 Nov 2025 | Google's playbook for KubeRay in production. |
| 45 | TMLS: Building Multi-Cloud GenAI Platforms Without the Pain (SkyPilot founder) | https://www.youtube.com/watch?v=_oWJ0t-RW7o | 24 Oct 2025 | Romil Bhardwaj presents SkyPilot at MLOps World GenAI Summit. |
| 46 | KubeCon: Slurm Bridge: Slurm Scheduling Superpowers in Kubernetes | https://www.youtube.com/watch?v=Vi8chqAFuN0 | 24 Nov 2025 | Bridging Slurm and Kubernetes scheduling for GPU workloads. |
| 47 | KCD Helsinki 2026: Volcano & KubeRay Dynamic AI Compute | https://www.youtube.com/watch?v=KCRcwBCk1o4 | 8 Jun 2026 | Dynamic AI compute environments on Kubernetes. |

---

## Appendix A: Thesis Challenge --- Clause-by-Clause Assessment

The thesis states:

> "The leading trading firms are beginning to manage AI compute as a portfolio of owned and rented capacity."

**Assessment: Moderately supported, but must be narrowed.**

"The leading trading firms" suggests a broader pattern. The evidence names Jane Street and HRT with high confidence, IMC with moderate confidence, and possibly Point72 (a hedge fund, not a trading firm). The word "beginning" is appropriate --- this is early-stage. "Portfolio of owned and rented capacity" accurately describes the Jane Street and HRT arrangements.

**Recommended narrowing:** "A small number of frontier quantitative trading firms --- notably Jane Street and Hudson River Trading --- are assembling portfolios of GPU capacity from owned data centres, specialist clouds, and hyperscalers."

> "Securing GPUs is the visible move."

**Assessment: Strongly supported.**

The $7B CoreWeave deal, the reported $13B Crusoe deal, the data centre tours --- all of this is highly visible GPU capacity acquisition. Media coverage focuses on the hardware deals.

> "The less visible strategic move is building a governed research platform that turns fragmented capacity into faster, reliable and repeatable experimentation."

**Assessment: Plausible but weakly evidenced for trading firms specifically.**

Shopify's SkyPilot architecture is the best evidence that such a platform exists. Point72's SkyPilot adoption suggests intent. Jane Street's Hivebucks and HRT's Blobby are components of such a platform. But no quantitative trading firm has published a complete governed research platform architecture.

The word "governed" is key: it implies quota management, cost attribution, priority scheduling, audit trails, and reproducibility. Shopify demonstrated these capabilities. For trading firms, this remains an inference.

**Recommended restatement:** "A small number of frontier quantitative trading firms are assembling portfolios of GPU capacity from owned data centres, specialist clouds, and hyperscalers. Securing capacity is the visible move. The less visible and less certain move is whether these firms are also building internal platforms that unify fragmented capacity into governed, reproducible research environments. One non-financial firm (Shopify) has published such an architecture. For trading firms, the components exist (internal allocation systems, custom storage) but the full platform remains undisclosed."

## Appendix B: The "Self-Improving" Hypothesis

The research brief asks whether a faster, better-documented research loop allows a firm to learn and adapt more quickly.

**Mechanism:** More GPU capacity -> more experiments per unit time -> more validated results -> faster model iteration -> better models -> better trading outcomes.

**Where the mechanism is supported:**
- More GPU capacity clearly enables more experiments (mechanical relationship)
- Shopify's architecture shows how to manage the experiment cycle efficiently (routing, priority, cost attribution)
- Ray and KubeRay provide frameworks for distributed experiment execution
- Weights & Biases (now CoreWeave) provides experiment tracking infrastructure

**Where the mechanism is unproven:**
- No public evidence connects experiment velocity to trading performance
- "More experiments" is only valuable if the evaluation process is rigorous; more bad experiments produce noise, not learning
- The bottleneck may not be compute: it could be data quality, feature engineering, model evaluation methodology, or the decision to deploy
- Jane Street's $15B July 2026 loss (partly attributed to an AI hedge fund investment) is a cautionary data point

**Honest assessment:** The mechanism is reasonable. A firm that can run 10x more experiments per week, with proper evaluation and feedback loops, should learn faster than one running fewer experiments. But "should" is not "does." No public evidence establishes this empirically for quantitative trading. Calling such a firm "self-improving" without showing the evaluation-and-feedback mechanism would be overclaiming.

---

## Appendix C: Forward-Looking Scenarios (From 25 September 2026)

### Scenario 1: Multi-Source Management Spreads (35% probability)

**Description:** Over the next 12--36 months, a second wave of firms (beyond Jane Street and HRT) builds multi-provider GPU compute arrangements. Tools like SkyPilot mature. Managed services like AWS HyperPod add cross-provider capabilities. The pattern extends to systematic hedge funds, quant-heavy banks, and large fintechs.

**Driving conditions:** Continued GPU scarcity; specialist cloud providers growing and IPO-ing; SkyPilot and alternatives becoming production-ready for financial services; regulatory clarity on cloud use in financial services.

**Likely beneficiaries:** SkyPilot, Kueue ecosystem, CoreWeave, Crusoe, Nebius. ML platform engineers at hedge funds.

**Technical consequences:** Standardisation around Kubernetes as the workload substrate. Emergence of "GPU FinOps" as a discipline. Growing demand for cross-provider observability and audit tools.

**Public signals:** More firms listed on SkyPilot customer page. Hedge fund job postings for GPU platform engineers at firms beyond the current five to seven. CoreWeave filing disclosing financial services as a material revenue segment.

### Scenario 2: Provider Consolidation (40% probability)

**Description:** Workloads consolidate around a smaller set of providers with strong managed platforms. AWS HyperPod, CoreWeave Cloud, and one or two others become the "big three" for AI compute. Firms prefer deep integration with a primary provider over the complexity of multi-provider orchestration. SkyPilot becomes a nice-to-have rather than a must-have.

**Driving conditions:** Hyperscaler GPU availability improves significantly. CoreWeave's managed platform matures (W&B integration, Mission Control). The complexity tax of multi-provider management outweighs the benefits for most firms.

**Likely beneficiaries:** AWS, CoreWeave, and the winning managed platform providers. Firms that bet on deep integration with a single provider.

**Technical consequences:** Less need for cross-provider orchestration. More investment in provider-specific optimisations. Custom internal platforms (Hivebucks, Blobby) remain but interact primarily with one or two external providers.

**Public signals:** Declining SkyPilot adoption metrics. Increasing feature parity between CoreWeave and AWS. Firms describing single-provider deployments at conferences.

### Scenario 3: Build-Over-Buy Intensifies (25% probability)

**Description:** The largest firms (Jane Street, HRT, potentially Citadel and Two Sigma) increase ownership of dedicated infrastructure. They use external providers selectively for burst capacity or specific hardware but run the majority of workloads on owned hardware. The multi-provider pattern narrows to "owned + selective external" rather than "many external providers managed as one."

**Driving conditions:** GPU costs decline as supply increases. Next-generation GPUs (Blackwell Ultra, Rubin) favour large clusters with custom networking. Firms with $5B+ annual profits find it economically rational to own rather than rent. Data sovereignty concerns intensify.

**Likely beneficiaries:** Firms with sufficient capital. Data centre developers and operators. Hardware manufacturers (NVIDIA, AMD). Less benefit for GPU cloud providers.

**Technical consequences:** Internal platforms become more important (custom scheduling, storage, networking). Cross-provider tools become less critical. The internal platform problem remains but is now "how to manage owned capacity efficiently" rather than "how to manage many providers."

**Public signals:** More data centre construction announcements from trading firms. Declining multi-year cloud contract renewals. Job postings for data centre engineers (not just cloud engineers) at hedge funds.

**Note on probability assignments:** These probabilities are qualitative estimates based on the evidence available as of 25 September 2026. They should be updated as new evidence emerges. The scenarios are not mutually exclusive: Scenario 1 could apply to mid-tier firms while Scenario 3 applies to the largest.
