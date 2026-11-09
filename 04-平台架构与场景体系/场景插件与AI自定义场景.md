# 场景插件与 AI 自定义场景

状态：[C] 长期架构方向；不代表现有产品已实现。

## 四个不同对象（必须区分）
- `ScenarioPlugin`：**场景插件/场景包**，封装目标、文书列表、输入约束、流程、质量规则，例如“毕业设计”。
- `DocumentFramework`：单类文书的通用内容结构、排版和规范，例如“开题报告”。
- `UserTemplate`：某用户的正式 DOCX 或具体排版要求。
- `Workspace`：某一次实际项目资料、事实和文书版本，不能跨项目泄漏。

## 用户入口 [C]
1. **选择预设场景**：例如毕业设计、技术汇报。
2. **AI 推荐场景**：用户说清目标，AI 给出候选及理由，由用户确认。
3. **从空白需求创建**：用户说“帮我建立一个研发项目月报工作台”，AI 建议场景目标、资料来源、文书集合、结构、检查规则和流程，用户核对修改并保存。
4. 长期可允许从预设场景复制创建私人版本；首期不开发公共插件商城或用户任意代码插件。

## AI 自建场景流程
自然语言目标 → 分析任务与产物 → 给出简短场景方案 → 用户确认/调整 → 生成受控的声明式配置 → 提供预览/测试示例 → 私人保存 → 在独立工作空间应用。

## 场景声明式配置的建议字段 [R]
```yaml
id: research-monthly-report
version: 0.1.0
name: 研发项目月报
scope: private
intent: 按月整理工程进展并输出月报
authorized_inputs: [project_docs, logs, user_notes]
documents:
  - framework: monthly_technical_report
    template_override: optional
steps: [ingest, fact_review, draft, format_check, user_review, export]
policies: [no_fabricated_results, source_traceability]
```
上面仅是**未来配置设计示例**，不是当前代码已采用的 schema 或可执行配置。

## 设计边界
- 场景是配置，底层能力由平台调用；用户创建场景不得直接执行用户提供的代码或访问其他人的资产。
- 不同场景可共用同一文书框架；同一场景可包含多份文书。
- 场景配置复用不应自动携带某一历史项目的源码、账户、个人信息。
- 在缺少用户资料时，不得将动态推断当作已验证项目事实。
- 场景保存范围默认为本人私有；公开分享需另做合规、版权和内容审核评估。
