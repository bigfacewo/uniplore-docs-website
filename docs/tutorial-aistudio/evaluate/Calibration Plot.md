---
sidebar_position: 5
---
### 组件介绍
**“校准曲线”（Calibration Plot）**控件显示分类器的概率预测和实际类概率之间的匹配。

<hr/>

- 输入：
  - evr：分类器对数据的测试结果
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“校准曲线”（Calibration Plot）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/evaluate/calibration-plot/param.png) ](/img/aistudio/evaluate/calibration-plot/param.png)

点击**“查看结果”**按钮，查看曲线：
[ ![](/img/aistudio/evaluate/calibration-plot/visualization.png) ](/img/aistudio/evaluate/calibration-plot/visualization.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>目标类</td> 
      <td>
      默认选中的类是按字母的顺序选择第一个
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>分类器</td> 
      <td>
      用户可以选择需要绘制的曲线，点击一个分类器可以选择或取消选择
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，使用**“朴素贝叶斯”（Naive Bayes）**、**“决策树”（Tree）**等模型链接**“预测”（Predictions）**控件进行预测，最后将评估结果在**“校准曲线”（Calibration Plot）**控件中进行展示。   
[ ![](/img/aistudio/evaluate/calibration-plot/workflow.png) ](/img/aistudio/evaluate/calibration-plot/workflow.png)

案例中加载 titanic 数据集，针对**“朴素贝叶斯”（Naive Bayes）**、**“决策树”（Tree）**算法进行模型预测。然后根据**“预测”（Predictions）**的结果校准曲线。案例中控件的配置以及执行结果如下图所示。   
[ ![](/img/aistudio/evaluate/calibration-plot/workflow-result.png) ](/img/aistudio/evaluate/calibration-plot/workflow-result.png)