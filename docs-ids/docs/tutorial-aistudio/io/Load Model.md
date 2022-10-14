---
sidebar_position: 11
---
### 组件介绍
**“加载模型”（Load Model）**控件实现了从输入文件中加载一个模型。

<hr/>

- 输入：
  - 无
- 输出：
  - mod：具有选定参数的模型

<hr/>


### 页面介绍
点击**“加载模型”（Load Model）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/io/load-model/param.png) ](/img/aistudio/io/load-model/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>选择文件</td> 
      <td>
      选择加载可用的模型文件
      </td> 
      <td></td>
  </tr>
</table>

:::caution
与“Load Model”一起使用的数据集必须具有兼容的属性
:::

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据集，**“加载模型”（Load Model）**控件加载已有模型文件，之后把**“加载文件”（File）**控件以及**“加载模型”（Load Model）**控件与**“预测”（Predictions）**控件连接起来查看基于已经构建的模型对输入数据进行预测的结果。  
[ ![](/img/aistudio/io/load-model/workflow.png) ](/img/aistudio/io/load-model/workflow.png)

案例中加载 iris 样例数据集，模型文件中存储的是 iris 样例数据集在**“决策树”（Tree）**控件上训练的模型。案例中控件的配置以及运行结果如下图所示。  
[ ![](/img/aistudio/io/load-model/workflow-result.png) ](/img/aistudio/io/load-model/workflow-result.png)