---
sidebar_position: 4
---
### 组件介绍
**“转置”（Transpose）**控件实现了对输入数据集进行转置的操作。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：处理后的数据集

<hr/>


### 页面介绍
点击**“转置”（Transpose）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/preprocess/transpose/param.png) ](/img/aistudio/preprocess/transpose/param.png)


#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>属性名</td> 
      <td>
      转置操作后，对数据集属性的命名方式：<br/>
      &emsp;&emsp;一般命名：若不设置前缀，则转置后数据集的属性名默认为 Feature (1), Feature (2), ... <br/>
      &emsp;&emsp;根据描述属性命名：当输入数据集包含描述属性时，可以选择根据描述属性的值对属性进行命名
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“转置”（Transpose）**控件对数据集进行转置操作，之后通过**“查看数据”（Data Table）**控件查看处理后的数据集。   
[ ![](/img/aistudio/preprocess/transpose/workflow.png) ](/img/aistudio/preprocess/transpose/workflow.png)

案例中加载 iris 数据集，在进行数据转置时，采用一般命名方式对转置后的数据集的属性进行命名。案例中控件的配置以及执行结果如下图所示。    
[ ![](/img/aistudio/preprocess/transpose/workflow-result.png) ](/img/aistudio/preprocess/transpose/workflow-result.png)