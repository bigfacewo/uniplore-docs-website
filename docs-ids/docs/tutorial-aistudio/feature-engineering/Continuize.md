### 组件介绍
**“连续化”（Continuize）**控件用于对数据进行分组聚集操作。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：处理后的数据集

<hr/>


### 页面介绍
点击**“连续化”（Continuize）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/feature-engineering/continuize/param.png) ](/img/aistudio/feature-engineering/continuize/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>多值离散属性</td> 
      <td>
      Continuize 控件对一般属性中的离散型属性进行处理。<br/>
      针对多值离散属性（假设属性值依次排序为 ‘a’,‘b’,‘c’ 三个值），该控件提供了以下几种处理方式：<br/>
      &emsp;&emsp;以目标/第一个取值为基础：该方法会将离散属性转换为（N-1）个连续属性，其中N为离散属性值的类别数。所以有三个值的离散属性将会被转化为两个连续属性。之后针对属性=‘a’，系统将把值转化为 0 或 1，表示原始属性的值是否为 ‘a’，0 表示不是，1表示是。同样地，对于属性=‘b’，系统也会把值转化为 0 或 1。<br/>
      &emsp;&emsp;以最频值为基础：与“以目标/第一个取值为基础”方法类似，但是该方法以最常用的值作为基础，选取最常用的值进行转化。<br/>
      &emsp;&emsp;每个值取一个属性：每个离散值都构造一个属性。<br/>
      &emsp;&emsp;忽略多值离散属性：从数据中删除多项属性（即（N-1）>1 的所有属性）。<br/>
      &emsp;&emsp;移除所有离散属性：移除数据集中的离散型属性（除了分类离散属性）。<br/>
      &emsp;&emsp;转换为有序值：将属性转化为值为 0,1,2 的连续值。<br/>
      &emsp;&emsp;根据数值数量划分：类似“转换为有序值”方法，只是转化为值为 0-1 之间的连续值。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>连续属性</td> 
      <td>
      定义连续型属性的处理：<br/>
      &emsp;&emsp;保持不变：对连续型属性不做任何处理。<br/>
      &emsp;&emsp;按范围规范化：处理过程为将原始值减去最小值并除以最大跨度，因此所有转化后的值都将在 0-1 之间。<br/>
      &emsp;&emsp;按标准偏差规范化：处理过程为原始值减去平均值再除以偏差。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>离散分类属性</td> 
      <td>
      离散分类属性的处理：<br/>
      &emsp;&emsp;保持不变：对离散型分类属性不做任何处理。<br/>
      &emsp;&emsp;转换为有序值：将属性转化为值为 0,1,2 的连续值。<br/>
      &emsp;&emsp;根据数值数量划分：类似“转换为有序值”方法，只是转化为值为 0-1 之间的连续值。<br/>
      &emsp;&emsp;每个取值一个属性：每个离散值都构造一个属性。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>取值范围</td> 
      <td>
      指定属性的值的范围 ‘从-1到1’或‘从0到1’ 。
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“连续化”（Continuize）**控件对数据集进行连续化处理，之后通过**“查看数据”（Data Table）**控件查看处理后的数据集。   
[ ![](/img/aistudio/feature-engineering/continuize/workflow.png) ](/img/aistudio/feature-engineering/continuize/workflow.png)

案例中加载 titanic 数据集，在进行连续化处理时，对多值离散属性采用“以目标/第一个取值为基础”的方式进行连续化处理，对连续型属性采用“保持不变”的处理方式，对离散分类属性采用“每个取值一个属性”的方式进行连续化处理，取值范围选取为 0-1。案例中控件的配置以及执行结果如下图所示。    
[ ![](/img/aistudio/feature-engineering/continuize/workflow-result.png ](/img/aistudio/feature-engineering/continuize/workflow-result.png)