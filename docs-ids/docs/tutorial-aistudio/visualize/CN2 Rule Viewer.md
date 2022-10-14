---
sidebar_position: 16
---
### 组件介绍
**“CN2规则查看器（CN2 Rule Viewer）”**控件用于查看已训练的CN2模型的规则信息。
<hr/>

- 输入：
  - data：数据集
  - mod: CN2规则分类器，包括诱导规则列表
- 输出：
  - sel: 选择规则对应的数据
  - data: 数据集

<hr/>


### 页面介绍
点击**“CN2规则查看器（CN2 Rule Viewer）”**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/visualize/cn2-rule-viewer/param.png) ](/img/aistudio/visualize/cn2-rule-viewer/param.png)

点击**“查看数据”**按钮，查看数据集详情：  
[ ![](/img/aistudio/visualize/cn2-rule-viewer/interaction.png) ](/img/aistudio/visualize/cn2-rule-viewer/interaction.png)

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，再通过**“CN2规则归纳（CN2 Rule Induction）”**组件构建规则，最后使用规则查看器“CN2规则查看器（CN2 Rule Viewer）”查看这些规则。  
[ ![](/img/aistudio/visualize/cn2-rule-viewer/workflow.png) ](/img/aistudio/visualize/cn2-rule-viewer/workflow.png)

案例中加载“iris”数据集，**“CN2规则归纳（CN2 Rule Induction）”**控件参数使用默认值。案例中控件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/visualize/cn2-rule-viewer/visualization.png) ](/img/aistudio/visualize/cn2-rule-viewer/visualization.png)