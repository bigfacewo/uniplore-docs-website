### 组件介绍
**“属性排名”（Rank）**控件可计算分类或回归数据集中特征属性的排名信息。

<hr/>

- 输入：
  - data：数据集
  - scr（0个或多个）：属性评分页面的模型，如线性/逻辑回归，随机森林，随机梯度下降等
- 输出：
  - data：包含选中属性的数据集（用户需要进行选择相关属性的操作）
  - scs：属性评分

<hr/>


### 页面介绍
点击**“属性排名”（Rank）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/feature-engineering/rank/param.png) ](/img/aistudio/feature-engineering/rank/param.png)

点击**“详细配置”**按钮，可查看各属性排名：
[ ![](/img/aistudio/feature-engineering/rank/interaction.png) ](/img/aistudio/feature-engineering/rank/interaction.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>分类评分</td> 
      <td>
      分类评分的各种方法：<br/>
      &emsp;&emsp;Infomation Gain：预期的信息量<br/>
      &emsp;&emsp;Gain Ratio：信息增益和属性内在信息的比率，减少了信息增益中出现的多值特征的偏差<br/>
      &emsp;&emsp;Gini：频率分布值之间的不等式<br/>
      &emsp;&emsp;ANOVA：不同类别的一般属性的平均值之差<br/>
      &emsp;&emsp;Chi2：以卡方统计为依据的一般属性与分类属性之间的依存关系<br/>
      &emsp;&emsp;ReliefF：属性区分相似数据实例的类别的能力<br/>
      &emsp;&emsp;FCBF（Fast Correlation Based Filter）：基于熵的度量，也识别由于属性之间的成对相关而导致的冗余。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>回归评分</td> 
      <td>
      Univariate Linear Regression：一元线性回归<br/>
      RReliefF：属性区分相似数据实例的类别的能力
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>选择属性输出</td> 
      <td>
      以何种方式选择需要的属性
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“属性排名”（Rank）**控件查看各属性的评分并选择需要的属性，之后通过**“查看数据”（Data Table）**控件查看处理后的数据集以及各属性评分。   
[ ![](/img/aistudio/feature-engineering/rank/workflow.png) ](/img/aistudio/feature-engineering/rank/workflow.png)

案例中加载 iris 数据集，选择属性【sepal length】和属性【petal length】。案例中控件的配置以及执行结果如下图所示。    
[ ![](/img/aistudio/feature-engineering/rank/workflow-result.png ](/img/aistudio/feature-engineering/rank/workflow-result.png)