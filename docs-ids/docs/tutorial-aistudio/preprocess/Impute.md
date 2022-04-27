### 组件介绍
**“缺失值处理”（Impute）**控件用于处理数据集中的缺失值。在构建数据挖掘分析工作流时，一些控件可能无法处理数据集中的缺失值，所以需要使用**“缺失值处理”（Impute）**控件处理（删除或替代）缺失值。

<hr/>

- 输入：
  - data：数据集
  - lrn：一种学习算法，用于在基于模型估算值时使用，如果未传入，则默认为1-NN
- 输出：
  - data：处理后的数据集

<hr/>


### 页面介绍
点击**“缺失值处理”（Impute）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/preprocess/impute/param.png) ](/img/aistudio/preprocess/impute/param.png)

点击“详细配置”按钮，对输入数据集的属性进行详细配置：
[ ![](/img/aistudio/preprocess/impute/interaction.png) ](/img/aistudio/preprocess/impute/interaction.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>填补方法</td> 
      <td>
      Impute 控件提供了以下几种处理缺失值方式（点击后将应用于所有属性上）：<br/>
      &emsp;&emsp;不填补：对于缺失值不做任何处理<br/>
      &emsp;&emsp;平均值/频繁值：对于连续型属性，使用平均值填充缺失值；对于离散型属性，使用频繁值填充缺失值<br/>
      &emsp;&emsp;独立值：创造新的值填充缺失值<br/>
      &emsp;&emsp;基于模型：基于其他属性的值构建预测缺失值的模型（模型可以通过输入端口传入，默认模型是 Tree）<br/>
      &emsp;&emsp;随机值：计算每个属性的值的分布，然后从中选择随机值填充缺失值<br/>
      &emsp;&emsp;删除包含未知值的行：删除包含缺失值的行
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>详细配置</td> 
      <td>
      详细配置页面中，左侧显示了各个属性及其使用的处理缺失值的方式，当用户想要针对某个属性设定特定的处理方式时，用户可以选中某些属性，在右侧方法中选择需要的处理方式即可。点击“重置所有为默认方法”，则所有单独设定的处理方式都重置为默认的处理方式。
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“缺失值处理”（Impute）**控件对数据集中包含缺失值的属性进行处理，之后通过**“查看数据”（Data Table）**控件查看处理后的数据集。   
[ ![](/img/aistudio/preprocess/impute/workflow.png) ](/img/aistudio/preprocess/impute/workflow.png)

案例中加载 bridges 数据集，全局填补方案选择“不填补”，打开详细配置页面，对于【LENGTH】属性指定“随机值”方法填充缺失值。案例中控件的配置以及执行结果如下图所示。      
[ ![](/img/aistudio/preprocess/impute/workflow-result.png ](/img/aistudio/preprocess/impute/workflow-result.png)