---
sidebar_position: 5
---
### 组件介绍
**“数据混淆”（Randomize）**控件用于混洗输入数据集的分类属性、一般属性和元属性。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：处理后的数据集

<hr/>


### 页面介绍
点击**“数据混淆”（Randomize）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/preprocess/randomize/param.png) ](/img/aistudio/preprocess/randomize/param.png)


#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>列混淆</td> 
      <td>
      用户可以选择需要对哪些属性进行混洗操作，该部分可多选
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>行混淆</td> 
      <td>
      选择需要混洗的数据集的比例。选择是否可以重复输出
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“数据混淆”（Randomize）**控件对数据集进行混洗，之后通过**“查看数据”（Data Table）**控件查看处理后的数据集。   
[ ![](/img/aistudio/preprocess/randomize/workflow.png) ](/img/aistudio/preprocess/randomize/workflow.png)

案例中加载 iris 数据集，对分类属性进行混洗，混洗数据的比例设为 100%。案例中控件的配置以及执行结果如下图所示。    
[ ![](/img/aistudio/preprocess/randomize/workflow-result.png) ](/img/aistudio/preprocess/randomize/workflow-result.png)