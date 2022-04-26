### 组件介绍
**“离散化”（Discretize）**控件用于对数据进行分组聚集操作。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：处理后的数据集

<hr/>


### 页面介绍
点击**“离散化”（Discretize）**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/feature-engineering/discretize/param.png)

点击**“详细配置”**按钮，对数据集的连续型属性进行详细配置：
![interaction](/img/aistudio/feature-engineering/discretize/interaction.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>默认设置</td> 
      <td>
      Discretize 控件提供了以下几种基本的离散方式（点击后将应用于所有连续型属性上）：<br/>
      &emsp;&emsp;等频划分：将属性分割成给定数量的间隔，以使得每个间隔包含数量大约相同的实例。<br/>
      &emsp;&emsp;等宽划分：均匀分割最小和最大观测值之间的范围，间隔数用户可以手动设置。<br/>
      &emsp;&emsp;Entropy-MDL：由Fayyad和Irani发明的自上而下的离散化方法，递归地将属性切割为最大化信息增益，直到增益低于切割的最小描述长度。 <br/>
      &emsp;&emsp;用户还可以选择不对属性做任何处理（保留原始数据值）或者删除连续型属性（移除数值变量）。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>单属性设置</td> 
      <td>
      Discretize 控件也提供了对属性的单独处理。<br/>
      左侧显示了数据集中的连续型属性，当用户想要针对某个属性设定特定的处理方式时，用户可以选中某些属性，在右侧方法中选择需要的处理方式即可。
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“离散化”（Discretize）**控件对数据集进行离散化处理，之后通过**“查看数据”（Data Table）**控件查看处理后的数据集。   
![workflow](/img/aistudio/feature-engineering/discretize/workflow.png)

案例中加载 iris 数据集，在进行离散化处理时，默认使用“等宽划分”，“详细配置”时，对【sepal length】属性采用“保留原始数值”的操作，对【sepal width】采用“Entropy-MDL”的方式进行离散化。案例中控件的配置以及执行结果如下图所示。    
![workflow-result](/img/aistudio/feature-engineering/discretize/workflow-result.png)